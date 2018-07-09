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
    var el = document.createElement('li');
    el.classList.add('list-group-item');
    var id = "element" + num++;
    el.id = id;
    el.appendChild(document.createTextNode(item + " "));

     /*
     Legger til en button til hvert listeelement
     som sletter det valgte listeelementet.
      */
    var fjernBtn = document.createElement('button');
    fjernBtn.appendChild(document.createTextNode('fjern'));
    fjernBtn.onclick = function () {
        this.parentNode.parentNode.removeChild(document.getElementById(id));
        for (var i = items.length-1; i >=0; i--){
            if (items[i] === item){
                items.splice(i,1);
                break;
            }
        }
        console.log("Fjerner " + item);
    };
    fjernBtn.classList.add('btn','btn-danger');
    el.appendChild(fjernBtn);


    kurv.appendChild(el);
    console.log('Legger til ' + item)
}


function cartShowName(item){
    var kurv = document.getElementById('handlekurv');
    kurv.innerHTML = item;
}
