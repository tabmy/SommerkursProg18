var items = [];

function addItem(item) {
    items.push(item);
    console.log("La til " + item);
}

function seeItems() {
    console.log("Viser handlekurv");
    if (items.length === 0) {
        alert('Du har ikke valgt noe!');
    }else{
        alert('Du har valgt: ' + items);
    }
}

function clearItems() {
    items = [];
    console.log("Tømmer handlekurv");
}