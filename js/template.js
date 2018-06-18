// Sort a single list
// - it must contain `li` elements
// - inspired by: https://stackoverflow.com/questions/282670/easiest-way-to-sort-dom-nodes#282711
var sortList = function(list) {
	var items = list.childNodes;

	var itemsArr = [];
	for (var i in items) {
	    if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
	        itemsArr.push(items[i]);
	    }
	}

	itemsArr.sort(function(a, b) {
	  return a.innerHTML == b.innerHTML
	          ? 0
	          : (a.innerHTML > b.innerHTML ? 1 : -1);
	});

	for (i = 0; i < itemsArr.length; ++i) {
	  list.appendChild(itemsArr[i]);
	}
}

// Sort list
var sortLists = function(IDs) {
	var lists = document.querySelectorAll(IDs);
	for (var i = 0; i < lists.length; i++) {
		sortList(lists[i]);
	}
}

// Run functions once the document is ready
document.addEventListener('DOMContentLoaded', function(){
  // Sort files in sidebar
  if (document.querySelector('.js-sort-list')) {
    sortLists('.js-sort-list');
  }
}, false);
