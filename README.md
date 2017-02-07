# Angular HTTP Cache

## What's this?

This project adds an "offline-first" approach to the regular Http service. Responses are saved to local persistence and then served from there on subsequent requests.

### How does it work?

Basically, the module uses its own extended Http replacement service to save the response to every request into the browser's local persistence.

So for every request, the service will first look for a matching response in its local persistence; if it exists, it will emit that response first.

Regardless of the previous step, the service will perform the HTTP request and will emit updated data if necessary.

## How to use it?

The module is a replacement for the native `HttpModule`, so it's intended to be easy to be dropped in.

Its methods are identical to the native module.

The code works fine with JSON-formatted HTTP responses. It can be also used for other types of responses, such as images, but __it hasn't been properly tested yet__, so please use with caution.

### Installing it

```
npm install ng-http-cache --save
```

### Importing it

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpCacheModule } from 'ng-http-cache';

@NgModule({
  imports: [
    BrowserModule,
    HttpCacheModule
  ]
})
export class ExampleModule { }
```

### Using it

```js
import { Http } from '@angular/http';
export class ExampleComponent implements OnInit {
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://api.example.com/example')
	  // There's no need to 'map' the response, the service does it for you!
      .subscribe((resp) => { 
        console.log(resp);
      });
  }
}
```

## More stuff

### Get in touch

Feel free to drop me a line if you have an issue, doubt, problem or suggestion, even just to tell me what you think. You can leave an issue here or give me a shout on [Twitter](http://twitter.com/davguij).

### To-do
1) Check the network status and don't make the request if offline.
2) Include unit tests.
3) Add JSONP support.

### License

MIT
