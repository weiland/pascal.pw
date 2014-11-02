(function() {
  'use strict';
  var P = {};
  P.getJSON = function(url, cb) {
    request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400){
        data = JSON.parse(request.responseText);
        if(typeof cb === 'function') {
          cb.call(this, data);
        }
      }
    };
    request.send();
	};
  var stuffFetched = function(data) {
    console.log(data);
  };
	P.getJSON('stuff.json', stuffFetched);
})();
