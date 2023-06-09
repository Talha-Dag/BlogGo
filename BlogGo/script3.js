function openNav() {
    document.getElementById("YanMenu").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("YanMenu").style.width = "0";
  }

  function Yazdir(){
    document.getElementById("kutu").innerHTML="Talha Dağ";
}

var btnYaz=document.getElementById("btnyaz");
btnYaz.onclick=Yazdir;

function sil(){
    document.getElementById("kutu").innerHTML="";
}

var btnsil=document.getElementById("btnsil");
btnsil.onclick=sil;

if (window.location.hash === "#gizliDiv") {
    // Gizli divi görünür hale getir
    document.getElementById("gizliDiv").style.display = "block";
}

function gizleGoster(ID) {
  var secilenID = document.getElementById(ID);
  if (secilenID.style.display == "none") {
    secilenID.style.display = "";
  } else {
    secilenID.style.display = "none";
  }
}

var dots = document.querySelector('.dots');
var dropdownMenu = document.querySelector('.dropdown-menu');

dots.addEventListener('click', function() {
  dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});

function showPopup() {
  var popupContainer = document.getElementById("popupContainer");
  popupContainer.style.display = "block";
}

function hidePopup() {
  var popupContainer = document.getElementById("popupContainer");
  popupContainer.style.display = "none";
}

function showPopup1() {
  var popupContainer = document.getElementById("popupContainer1");
  popupContainer.style.display = "block";
}

function hidePopup1() {
  var popupContainer = document.getElementById("popupContainer");
  popupContainer.style.display = "none";
  
  var popupContainer1 = document.getElementById("popupContainer1");
  popupContainer1.style.display = "none";
}
