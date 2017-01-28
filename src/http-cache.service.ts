import { Injectable } from '@angular/core';

@Injectable()
export class HttpCacheService {

	constructor() { }

	sayHello() {
		return "Hello!";
	}

}
