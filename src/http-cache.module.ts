import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, ConnectionBackend, RequestOptions } from '@angular/http';

import { HttpCacheService } from './http-cache.service';

export function httpCacheService(backend: ConnectionBackend, defaultOptions: RequestOptions) {
	return new HttpCacheService(backend, defaultOptions);
}

@NgModule({
	imports: [
		HttpModule
	],
	providers: [
		{
			provide: Http,
			deps: [XHRBackend, RequestOptions],
			useFactory: httpCacheService
		}
	],
})
export class HttpCacheModule { }
