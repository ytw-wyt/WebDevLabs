function greetingFunc() {

    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h>=5 && h<12) {
        E.innerHTML=" Good morning, I am Yuting Wang";
    } else if (h>=12 && h<18) {
        E.innerHTML+=" Good afternoon, I am Yuting Wang";
    } else if (h>=18 && h<20) {
        E.innerHTML=" Good evening, I am Yuting Wang";
    } else  {
        E.innerHTML="Good night, I am Yuting Wang";
    } }



var L = window.location.href;
console.log(L);
if (L.includes("index.html")) { /* run only for index.html page */
    greetingFunc();}


function addYear() {

   var d= new Date();

   var y = d.getFullYear();

   var E = document.getElementById("copyYear");

   E.innerHTML+=y;

}

// function showList() {

//     document.getElementById("FavList").style.display = "block";
 
//     document.getElementById("SeeMoreBTN").style.display = "none";
 
//  }

 $("#readLess").click(function(){

    $("#longIntro").hide();
 
    $("#readLess").hide();  
 
    $("#readMore").show();    
 
 
  });
 
   $("#readMore").click(function(){
 
    $("#longIntro").show();
 
    $("#readLess").show();
 
    $("#readMore").hide();    
 
  });

  function validate() {

    var userName = document.getElementById("UserName");
 
    var userEmail = document.getElementById("UserEmail");
 
    var userText = document.getElementById("Usertext");
 
    var msg = document.getElementById("ValidateMsg");
 
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
 
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
 
    }
 
 }

 // Initialize and add the map

let map;


async function initMap() {

 // The location of CMU

 const position = { lat: 40.44332926007748, lng:-79.94249584843838 };
 const position2 = { lat: 40.4394, lng: -80.0018 };

 // Request needed libraries.

 //@ts-ignore

 const { Map } = await google.maps.importLibrary("maps");

 const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
 // The map, centered at CMU
 map = new Map(document.getElementById("map"), {
   zoom: 12,
   center: position,
   mapId: "DEMO_MAP_ID",
 });



 // The marker, positioned at CMU

 const marker = new AdvancedMarkerElement({

   map: map,

   position: position,

   title: "CMU",

 });

 const marker2 = new AdvancedMarkerElement({

    map: map,
 
    position: position2,
 
    title: "CMU",
 
  });

}

var L = window.location.href;

console.log(L);

if (L.includes("fun.html")) { /* run only foe this page */

    initMap();

}

function activeNav() {

  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {

    x.className += " responsive";

  } else {

    x.className = "topnav";

  }

}