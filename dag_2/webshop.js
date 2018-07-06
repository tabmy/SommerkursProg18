var items = [];

function addItem(item) {
    items.push(item);
}

function seeItems() {
    if (items.length === 0) {
        alert('Du har ikke valgt noe!');
    }else{
        alert('Du har valgt: ' + items);
    }
}

function clearItems() {
    items = [];
}