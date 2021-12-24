function openNav() {
    document.getElementById("mySidenav_sc").style.bottom= "0px";
}

function closeNav() {
    document.getElementById("mySidenav_sc").style.bottom = "-110px";
}



document.getElementById('demosMenu').addEventListener('change', function(e){
    var dropdown = document.getElementById('demosMenu');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});