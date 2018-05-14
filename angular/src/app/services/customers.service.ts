import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Customer } from '../models/customer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class CustomersService {
	// private readonly API_URL = 'http://localhost:3000/customers/';
	private readonly API_URL = 'customers/';
	dataChange: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
	dialogData: any;

	constructor(private httpClient: HttpClient, private flashMessage: FlashMessagesService) {}

	get data(): Customer[] {
		return this.dataChange.value;
	}

	getDialogData() {
		return this.dialogData;
	}

	listCustomers() {
		this.httpClient.get<Customer[]>(this.API_URL + 'list').subscribe(
			(data) => {
				this.dataChange.next(data);
			},
			(err: HttpErrorResponse) => {
				console.log(err.name + ' ' + err.message);
			}
		);
	}

	addCustomer(customer: Customer): void {
		this.httpClient.post(this.API_URL + 'add', customer).subscribe(
			(data) => {
				this.dialogData = customer;
				this.flashMessage.show('Successfully added', {
					cssClass: 'alert-success',
					timeout: 3000
				});
			},
			(err: HttpErrorResponse) => {
				this.flashMessage.show('Error occurred', {
					cssClass: 'alert-danger',
					timeout: 8000
				});
				console.log(err.name + ' ' + err.message);
			}
		);
	}

	updateCustomer(customer: Customer): void {
		this.httpClient.post(this.API_URL + 'update', customer).subscribe(
			(data) => {
				this.dialogData = customer;
				this.flashMessage.show('Successfully updated', {
					cssClass: 'alert-success',
					timeout: 3000
				});
			},
			(err: HttpErrorResponse) => {
				this.flashMessage.show('Error occurred', {
					cssClass: 'alert-danger',
					timeout: 8000
				});
				console.log(err.name + ' ' + err.message);
			}
		);
	}

	deleteCustomer(customerID: number): void {
		this.httpClient.delete(this.API_URL + 'delete/' + customerID).subscribe(
			(data) => {
				this.flashMessage.show('Successfully deleted', {
					cssClass: 'alert-success',
					timeout: 3000
				});
			},
			(err: HttpErrorResponse) => {
				this.flashMessage.show('Error occurred', {
					cssClass: 'alert-danger',
					timeout: 3000
				});
				console.log(err.name + ' ' + err.message);
			}
		);
	}
}
