/*
 *
 * IEContentLoaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com) NWBOX S.r.l.
 * Summary: DOMContentLoaded emulation for IE browsers
 * Updated: 05/10/2007
 * License: GPL/CC
 * Version: TBD
 *
 */

// @w	window reference
// @fn	function reference
function IEContentLoaded (w, fn) {
	var d = w.document, done = false,
	// only fire once
	init = function () {
		if (!done) {
			done = true;
			fn();
		}
	};
	// polling for no errors
	(function () {
		try {
			// throws errors until after ondocumentready
			d.documentElement.doScroll('left');
		} catch (e) {
			setTimeout(arguments.callee, 50);
			return;
		}
		// no errors, fire
		init();
	})();
	// trying to always fire before onload
	d.onreadystatechange = function() {
		if (d.readyState == 'complete') {
			d.onreadystatechange = null;
			init();
		}
	};
}
// End of * IEContentLoaded.js

IEContentLoaded(window, function()
	{
		var links = document.getElementsByTagName("a");
		for(var i=0; i<links.length; i++)
		{
			var link = links[i];
			if (/download\.youporn\.com/.test(link.href))
				if (/iPod/.test(link.innerHTML))
					window.location = link.href;
		}
	});