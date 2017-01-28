import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Headers, Request, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpCacheService extends Http {

	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		console.log('request!');
		return super.request(url, options)
			.map((response) => {
				console.log('response');
				return response;
			})
	}

}
