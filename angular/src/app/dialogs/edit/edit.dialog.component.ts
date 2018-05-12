import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-baza.dialog',
	templateUrl: '../../dialogs/edit/edit.dialog.html',
	styleUrls: [ '../../dialogs/edit/edit.dialog.css' ]
})
export class EditDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<EditDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
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

	confirmEdit(): void {
		this.dataService.updateCustomer(this.data);
	}
}
