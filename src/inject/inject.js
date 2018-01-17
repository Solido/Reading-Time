var rms = ['div', 'class', 'img', 'href', 'src', '<![', ');}', '||']


console.log("counting ...")
var wordsPerMin = 350;

var elements = document.getElementsByTagName('*');
var count = 0;

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];

	for (var j = 0; j < element.childNodes.length; j++) {
		var node = element.childNodes[j];

		if (node.nodeType === 3) {

			var text = node.nodeValue;

			if (text.trim().length) {
				var cleaning = text
					.replace(/ *\([^)]*\) */g, "")
					.replace(/ *\{[^)]*\} */g, "")

				var valid = rms.every(function (rm) {
					return cleaning.indexOf(rm) === -1;
				});

				if (valid) {
					var words = cleaning.split(' ').length;
					if (words > 5) {
						//console.log(cleaning)
						count += words;
					}
				}
			}

		}
	}
}

console.log("Total estimated word " + count);
var reftime = Math.ceil(count / wordsPerMin);
console.log("Total estimated time " + reftime + " at " + wordsPerMin + " words per min.")

chrome.runtime.sendMessage({ timeread: { count: count, reftime: reftime, wordsPerMin: wordsPerMin } }, function (response) {
	console.log(response);
});

			/*
			var div = document.createElement("div");
			document.body.appendChild(div);
			div.innerText = "Words count " + count;
			*/


