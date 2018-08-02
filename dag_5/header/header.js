function makeHeader(){
    /*
    Sjekker om element med id 'header' finnes.
    Om den finnes, så skjer ingenting, fordi funksjonen avsluttes
    return (ingenting) bare avslutter funksjonen
    */
    if (document.getElementById('header'))return;

    /*
        Her lager vi en div
        Vi gir den id='header'
        Vi gir den class='header'
        Vi gir den en tekst - "Velkommen"
        <div id="header" class="header">Velkommen</div>
        Vi gir header en høyde på '3em' i js - fordi vi bruker denne høyden senere.
     */
    var header = document.createElement('div');
    header.id = 'header';
    header.classList.add('header');
    header.innerText = "Velkommen";
    header.style.height = '3em';

    /*
        Lager en variabel med verdien/referanse til <body> i HTML-en vår.
        Legger til 'header' i body, slik at den vises i nettleseren.
     */
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(header);

    /*
        Lager en "filler-div" som ikke gjør annet enn å "ta opp plass",
        så vår header fungerer som den skal.
        Gir filler-div en høyde lik headeren, så den tar opp like mye plass.
     */
    var filler = document.createElement('div');
    filler.style.height = header.style.height;

    /*
        Legger inn "filler" på første etter <body> i HTML, så den er det første elementet
        i dokumentet vårt. Da vil den være på toppen.
     */
    body.insertAdjacentElement('afterbegin', filler);
}