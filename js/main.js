(function() {
	function currentYear() {
		return new Date().getFullYear();
	}

	var loaded$ = Rx.Observable.fromEvent(document, "DOMContentLoaded");

	loaded$.map(function() {
		return document.getElementsByClassName('current-year');
	}).
	flatMap(function(elems) { return elems; }).
	subscribe(function(elem) {
		elem.innerHTML = currentYear();
	});


})();
