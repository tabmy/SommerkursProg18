function newAlert() {
    //window.alert = function (text) { styleAlert(); }
    styleAlert();
}

function styleAlert() {
    var d = document;

    if (d.getElementById('fancyAlert')) {
        return;
    }

    var container = document.createElement('div');
    container.id = "alertContainer";
    d.getElementsByTagName('body')[0].appendChild(container);
    var alertBox = d.createElement('div');
    container.appendChild(alertBox);
    alertBox.id = "alertBox";

    alertBox.style.left = (document.documentElement.scrollWidth - alertBox.offsetWidth) / 2 + "px";

    var alertHeader = document.createElement('div');
    alertHeader.id = "alertHeader";
    alertHeader.innerText = "Alert";
    alertBox.appendChild(alertHeader);

    var alertMessage = document.createElement('div');
    alertBox.appendChild(alertMessage);
    alertMessage.classList.add('alert', 'alert-info');
    alertMessage.innerText = d.getElementById('input1').value;

    var button = document.createElement('button');
    button.innerText = "OK";
    button.classList.add('btn', 'btn-primary', 'btn-md', 'center-block');
    button.onclick = function () {
        removeAlert()
    };
    alertBox.appendChild(button);
}

function removeAlert() {
    document.getElementsByTagName('body')[0].removeChild(document.getElementById('alertContainer'));
}