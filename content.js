
//stick the link on the page
//TODO: also make work for issue subtasks
var epicTable = document.getElementById('ghx-issues-in-epic-table'),
	epicParent = epicTable.parentElement,
//	issueTable = document.getElementById('issuetable'),
	div = document.createElement('div');

div.className = 'jira-bulk-tabs';
div.innerHTML = '<a href="#" class="jira-bulk-tabs-btn" onclick="openTheTabs()" style="font-weight: bold;">Open all in new tabs</a>';
epicParent.insertBefore(div, epicTable);

//stick the click function onto the page body
var script = document.createElement("script");
script.type = "text/javascript";
script.src = chrome.extension.getURL("clickListener.js");
document.body.appendChild(script);


document.addEventListener("bulkLinkClicked", function(data) {
 
	var baseURL = 'https://kitomba.atlassian.net/',
 		matches = [];

 	//get the links	
	var a = document.querySelectorAll('#ghx-issues-in-epic-table .ghx-minimal a');

	//push each issue URL into the array
	Array.prototype.forEach.call(a, function(el) {
	    matches.push(baseURL + el.getAttribute('href'));
	});

    //send the array to the background file, tabs can only be opened from there
	chrome.runtime.sendMessage({matches: matches});

});
