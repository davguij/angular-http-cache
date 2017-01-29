export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/angular-http-cache.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng.http-cache',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/http': 'ng.http',
		'rxjs': 'Rx',
		'rxjs/Observable': 'Rx',
		'rxjs/ReplaySubject': 'Rx',
		'rxjs/add/operator/map': 'Rx.Observable.prototype',
		'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
		'rxjs/add/observable/fromEvent': 'Rx.Observable',
		'rxjs/add/observable/of': 'Rx.Observable',
		'angular-async-local-storage': 'ng.asyncLocalStorage'
	}
}
