import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerDetailService {
	// private readonly API_URL = 'http://localhost:3000/customer-detail/';
	private readonly API_URL = 'customer-detail/';
	constructor(private http: Http) {}

	getCustomer(id) {
		let headers = new Headers();

		headers.append('Content-Type', 'application/json');
		return this.http.get(this.API_URL + 'profile/' + id, { headers: headers }).map((res) => res.json());
	}
}
