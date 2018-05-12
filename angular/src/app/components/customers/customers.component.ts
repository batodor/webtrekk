import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Customer } from '../../models/customer';
import { AddDialogComponent } from '../../dialogs/add/add.dialog.component';
import { EditDialogComponent } from '../../dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from '../../dialogs/delete/delete.dialog.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-customers',
	templateUrl: './customers.component.html',
	styleUrls: [ './customers.component.css' ]
})
export class CustomersComponent implements OnInit {
	displayedColumns = [ 'customerID', 'first', 'last', 'birthday', 'gender', 'lastContact', 'actions' ];
	exampleDatabase: CustomersService | null;
	dataSource: ExampleDataSource | null;
	index: number;
	customerID: number;

	constructor(
		private router: Router,
		public httpClient: HttpClient,
		private customersService: CustomersService,
		public dialog: MatDialog
	) {}

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('filter') filter: ElementRef;

	ngOnInit() {
		this.loadData();
	}

	refresh() {
		this.loadData();
	}

	customerDetail(customerID: string) {
		this.router.navigate([ '/customers/' + customerID ]);
	}

	addNew() {
		const customer = {
			name: {
				first: null,
				last: null
			}
		};
		const dialogRef = this.dialog.open(AddDialogComponent, {
			data: customer
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result === 1) {
				this.refresh();
			}
		});
	}

	startEdit(customer: Customer) {
		const dialogRef = this.dialog.open(EditDialogComponent, {
			data: customer
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result === 1) {
				// When using an edit things are little different, firstly we find record inside DataService by id
				const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
					(x) => x.customerID === customer.customerID
				);
				// Then you update that record using data from dialogData (values you enetered)
				this.exampleDatabase.dataChange.value[foundIndex] = this.customersService.getDialogData();
				// And lastly refresh table
				this.refreshTable();
			}
		});
	}

	deleteItem(customer: Customer) {
		const dialogRef = this.dialog.open(DeleteDialogComponent, {
			data: customer
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result === 1) {
				const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
					(x) => x.customerID === customer.customerID
				);
				// for delete we use splice in order to remove single object from DataService
				this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
				this.refreshTable();
			}
		});
	}

	// If you don't need a filter or a pagination this can be simplified, you just use code from else block
	private refreshTable() {
		// if there's a paginator active we're using it for refresh
		if (this.dataSource._paginator.hasNextPage()) {
			this.dataSource._paginator.nextPage();
			this.dataSource._paginator.previousPage();
			// in case we're on last page this if will tick
		} else if (this.dataSource._paginator.hasPreviousPage()) {
			this.dataSource._paginator.previousPage();
			this.dataSource._paginator.nextPage();
			// in all other cases including active filter we do it like this
		} else {
			this.dataSource.filter = '';
			this.dataSource.filter = this.filter.nativeElement.value;
		}
	}

	public loadData() {
		this.exampleDatabase = new CustomersService(this.httpClient, null);
		this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
		Observable.fromEvent(this.filter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) {
					return;
				}
				this.dataSource.filter = this.filter.nativeElement.value;
			});
	}
}

export class ExampleDataSource extends DataSource<Customer> {
	_filterChange = new BehaviorSubject('');

	get filter(): string {
		return this._filterChange.value;
	}

	set filter(filter: string) {
		this._filterChange.next(filter);
	}

	filteredData: Customer[] = [];
	renderedData: Customer[] = [];

	constructor(public _exampleDatabase: CustomersService, public _paginator: MatPaginator, public _sort: MatSort) {
		super();
		// Reset to the first page when the user changes the filter.
		this._filterChange.subscribe(() => (this._paginator.pageIndex = 0));
	}

	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable<Customer[]> {
		// Listen for any changes in the base data, sorting, filtering, or pagination
		const displayDataChanges = [
			this._exampleDatabase.dataChange,
			this._sort.sortChange,
			this._filterChange,
			this._paginator.page
		];

		this._exampleDatabase.listCustomers();

		return Observable.merge(...displayDataChanges).map(() => {
			// Filter data
			this.filteredData = this._exampleDatabase.data.slice().filter((customer: Customer) => {
				const searchStr = (customer.customerID +
					customer.name.first +
					customer.name.last +
					customer.gender).toLowerCase();
				return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
			});

			// Sort filtered data
			const sortedData = this.sortData(this.filteredData.slice());

			// Grab the page's slice of the filtered sorted data.
			const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
			this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
			return this.renderedData;
		});
	}
	disconnect() {}

	/** Returns a sorted copy of the database data. */
	sortData(data: Customer[]): Customer[] {
		if (!this._sort.active || this._sort.direction === '') {
			return data;
		}

		return data.sort((a, b) => {
			let propertyA: Number | String | Date = '';
			let propertyB: Number | String | Date = '';

			switch (this._sort.active) {
				case 'customerID':
					[ propertyA, propertyB ] = [ a.customerID, b.customerID ];
					break;
				case 'first':
					[ propertyA, propertyB ] = [ a.name.first, b.name.first ];
					break;
				case 'last':
					[ propertyA, propertyB ] = [ a.name.last, b.name.last ];
					break;
				case 'birthday':
					[ propertyA, propertyB ] = [ a.birthday, b.birthday ];
					break;
				case 'gender':
					[ propertyA, propertyB ] = [ a.gender, b.gender ];
					break;
				case 'lastContact':
					[ propertyA, propertyB ] = [ a.lastContact, b.lastContact ];
					break;
			}

			const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
			const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

			return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
		});
	}
}
