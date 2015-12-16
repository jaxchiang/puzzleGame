// Dogod的初始化，顺便放到window下，更方面直接使用。
 (function(win, name){
	
	win[name] = {};
	
	var mix = function(a, b){
		for(var i in b){
			a[i] = b[i];
		}
		return a;
	}
	
	mix(win[name], {"mix":mix});
	
	
})(window, 'Dogod');

