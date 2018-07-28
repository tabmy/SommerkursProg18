var items = [];
var num = 0;

function addItem(item) {
    items.push(item);
    cartAdd(item);
    //cartShowName(item);
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
    document.getElementById('handlekurv').innerHTML = "";
}

function cartAdd(item) {
    var kurv = document.getElementById('handlekurv');
    var element = document.createElement('li');
    element.classList.add('list-group-item');
    var id = "element" + num++;
    element.id = id;
    element.appendChild(document.createTextNode(item + " "));

     /*
     Legger til en button til hvert listeelement
     som sletter det valgte listeelementet.
      */
    var fjernBtn = document.createElement('button');
    fjernBtn.appendChild(document.createTextNode('fjern'));

    fjernBtn.onclick = function () {
        deleteElement(id, item);
    };
    fjernBtn.classList.add('btn','btn-danger');
    element.appendChild(fjernBtn);


    kurv.appendChild(element);
    console.log('Legger til ' + item);
}

function deleteElement(id, item) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
    for (var i = items.length-1; i >=0; i--){
        if (items[i] === item){
            items.splice(i,1);
            break;
        }
    }
    console.log("Fjerner " + item);
}

function cartShowName(item){
    var kurv = document.getElementById('handlekurv');
    kurv.innerHTML = item;
}
