function openTheTabs() {
	console.log('cats');
	var event = document.createEvent('Event');
    event.initEvent('bulkLinkClicked');
    document.dispatchEvent(event);
}