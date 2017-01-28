import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpCacheService } from './http-cache.service';

export function httpServiceFactory() {
	return new HttpCacheService();
}

@NgModule({
	imports: [CommonModule],
	providers: [
		{ provide: HttpCacheService, useFactory: httpServiceFactory }
	]
})
export class HttpCacheModule { }
