import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Headers, Request, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class HttpCacheService extends Http {

	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private localStorage: AsyncLocalStorage) {
		super(backend, defaultOptions);
	}

	request(req: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		let subject = new Subject<Response>();
		let url = typeof req === 'string' ? req : req.url;

		this.localStorage.getItem(url)
			.filter(resp => resp != null)
			.subscribe((localData: Response) => {
				subject.next(localData);
			});

		super.request(req, options)
			.map(resp => resp.json())
			.subscribe((remoteData: Response) => {
				// TODO check if both remote and local data are different
				// if they are, avoid saving remote data to localStorage and .next() on subject
				this.localStorage.setItem(url, remoteData).subscribe((saved) => {
					subject.next(remoteData);
				});
			});
		return subject.asObservable();
	}

}
