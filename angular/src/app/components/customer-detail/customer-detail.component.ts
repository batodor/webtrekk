import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerDetailService } from '../../services/customer-detail.service';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customer';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-customer-detail',
	templateUrl: './customer-detail.component.html',
	styleUrls: [ './customer-detail.component.css' ]
})
export class CustomerDetailComponent implements OnInit {
	customer: Object;
	editMode: Boolean = false;
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private customerDetailService: CustomerDetailService,
		private customersService: CustomersService
	) {}

	formControl = new FormControl('', [
		Validators.required
		// Validators.email,
	]);

	ngOnInit() {
		this.loadCustomer();
	}

	loadCustomer() {
		const id = this.route.snapshot.params['id'];
		this.customerDetailService.getCustomer(id).subscribe(
			(data) => {
				this.customer = data;
			},
			(err) => {
				console.log(err);
				return false;
			}
		);
	}

	back() {
		this.router.navigate([ '/customers' ]);
	}

	edit() {
		this.editMode = true;
	}

	cancel(customer: Customer) {
		this.editMode = false;
	}

	confirmEdit(customer: Customer) {
		this.customersService.updateCustomer(customer);
		this.editMode = false;
	}

	getErrorMessage() {
		return this.formControl.hasError('required')
			? 'Required field'
			: this.formControl.hasError('email') ? 'Not a valid email' : '';
	}
}
