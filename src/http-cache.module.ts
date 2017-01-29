import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, ConnectionBackend, RequestOptions } from '@angular/http';
import { AsyncLocalStorageModule, AsyncLocalStorage } from 'angular-async-local-storage';

import { HttpCacheService } from './http-cache.service';

export function httpCacheService(backend: ConnectionBackend, defaultOptions: RequestOptions, storage: AsyncLocalStorage) {
	return new HttpCacheService(backend, defaultOptions, storage);
}

@NgModule({
	imports: [
		HttpModule,
		AsyncLocalStorageModule
	],
	providers: [
		{
			provide: Http,
			deps: [XHRBackend, RequestOptions, AsyncLocalStorage],
			useFactory: httpCacheService
		}
	],
})
export class HttpCacheModule { }
