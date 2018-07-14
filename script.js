function showExample(id) {
    var element = document.getElementById(id);
    if (!element) {
        console.log('\''+ id + '\' is not found');
        return;
    }

    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}