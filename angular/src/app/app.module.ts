import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';

import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { CustomersService } from './services/customers.service';
import { CustomerDetailService } from './services/customer-detail.service';
import { AuthGuard } from './guards/auth.guard';

import {
	MatButtonModule,
	MatDialogModule,
	MatIconModule,
	MatInputModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule,
	MatToolbarModule,
	MatSelect,
	MatOption,
	MatDatepicker,
	MatSelectModule,
	MatOptionModule,
	MatDatepickerModule,
	MatNativeDateModule
} from '@angular/material';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ] },
	{ path: 'customers', component: CustomersComponent, canActivate: [ AuthGuard ] },
	{ path: 'customers/profile/:id', component: CustomerDetailComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		ProfileComponent,
		CustomersComponent,
		AddDialogComponent,
		EditDialogComponent,
		DeleteDialogComponent,
		CustomerDetailComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes),
		FlashMessagesModule.forRoot(),
		FormsModule,
		MatButtonModule,
		MatDialogModule,
		MatIconModule,
		MatInputModule,
		MatPaginatorModule,
		MatSortModule,
		MatTableModule,
		MatToolbarModule,
		MatSelectModule,
		MatOptionModule,
		MatDatepickerModule,
		MatNativeDateModule,
		ReactiveFormsModule
	],
	entryComponents: [ AddDialogComponent, EditDialogComponent, DeleteDialogComponent ],
	providers: [ ValidateService, AuthService, AuthGuard, CustomersService, CustomerDetailService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
