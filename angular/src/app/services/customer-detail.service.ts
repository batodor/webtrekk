import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerDetailService {
	constructor(private http: Http) {}

	getCustomer(id) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.get('customers/' + id, { headers: headers }).map((res) => res.json());
	}
}
