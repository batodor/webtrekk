import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { FormControl, Validators } from '@angular/forms';
import { Customer } from '../../models/customer';

@Component({
	selector: 'app-add.dialog',
	templateUrl: '../../dialogs/add/add.dialog.html',
	styleUrls: [ '../../dialogs/add/add.dialog.css' ]
})
export class AddDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<AddDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Customer,
		public dataService: CustomersService
	) {}

	formControl = new FormControl('', [
		Validators.required
		// Validators.email,
	]);

	getErrorMessage() {
		return this.formControl.hasError('required')
			? 'Required field'
			: this.formControl.hasError('email') ? 'Not a valid email' : '';
	}

	submit() {
		// emppty stuff
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	public confirmAdd(): void {
		this.dataService.addCustomer(this.data);
	}
}
