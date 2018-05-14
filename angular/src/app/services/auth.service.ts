import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
	authToken: any;
	user: any;
	//private readonly API_URL = 'http://localhost:3000/users/';
	private readonly API_URL = 'users/';

	constructor(private http: Http) {}

	registerUser(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.API_URL + 'register', user, { headers: headers }).map((res) => res.json());
	}

	authenticateUser(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.API_URL + 'login', user, { headers: headers }).map((res) => res.json());
	}

	getProfile() {
		let headers = new Headers();
		this.loadToken();
		headers.append('Authorization', this.authToken);
		headers.append('Content-Type', 'application/json');
		return this.http.get(this.API_URL + 'profile', { headers: headers }).map((res) => res.json());
	}

	loadToken() {
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}

	storeUserData(token, user) {
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
	}

	loggedIn() {
		return tokenNotExpired('id_token');
	}

	logout() {
		this.authToken = null;
		this.user = null;
		localStorage.clear();
	}
}
