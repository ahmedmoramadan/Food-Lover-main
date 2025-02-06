var PZAIMG = document.querySelector(".PZA img");

var Nav = document.getElementById("navbar");

var OF1 = document.getElementsByClassName("offer1")[0];
var OF2 = document.getElementsByClassName("offer2")[0];
var OF3 = document.getElementsByClassName("offer3")[0];

var menuLeft = document.querySelector(".menu-items-left");
var ITEMLEFT = menuLeft.getElementsByClassName("menu-item");

var menuright = document.querySelector(".menu-items-right");
var ITEMRIGHT = menuLeft.getElementsByClassName("menu-item");

var daytime1 = document.getElementById("daytime-item1");
var daytime2 = document.getElementById("daytime-item2");
var daytime3 = document.getElementById("daytime-item3");
var daytime4 = document.getElementById("daytime-item4");

var m1 = document.getElementsByClassName("m1")[0];
var m2 = document.getElementsByClassName("m2")[0];
var m3 = document.getElementsByClassName("m3")[0];
var m4 = document.getElementsByClassName("m4")[0];
var m5 = document.getElementsByClassName("m5")[0];
var m6 = document.getElementsByClassName("m6")[0];

window.onscroll = function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 400 ) {
        PZAIMG.style.animation = "move 1.5s forwards";
        Nav.classList.add("sticky-bar");
    }
    else {
        Nav.classList.remove("sticky-bar");

    }
    if(scrollPosition >1000 )
    {
        OF1.style.animation = "moveUp 1.5s forwards";
        OF2.style.animation = "moveUp 1.5s .4s forwards";
        OF3.style.animation = "moveUp 1.5s .8s forwards";
    }
    if(scrollPosition > 1800)
    {
        menuLeft.style.animation = "MoveRight 1.5s forwards";
        menuright.style.animation = "Moveleft 1.5s forwards";
    }    
    if(scrollPosition > 2800)
    {
        daytime1.style.animation = "move1 1.5s forwards";
        daytime2.style.animation = "move1 1.5s .3s forwards";
        daytime3.style.animation = "move1 1.5s .6s forwards";
        daytime4.style.animation = "move1 1.5s .9s forwards";
    }
};

// <script>
//         // النص الذي نريد كتابته
//         let count = 0;

//         // تعريف الدالة التي ستكتب النص في الصفحة
//         function writeText() {
//             const container = document.getElementById('text-container');
//             container.innerHTML = "النص الذي يظهر في الصفحة: " + count;
//             count++; // زيادة العدد كل مرة
//         }

//         // استخدام setInterval لتنفيذ الدالة كل ثانية (1000 ميللي ثانية)
//         setInterval(writeText, 1000);
//     </script>

// if (scrollY > 2000) {
//     services.forEach(function (service, index) {
//         console.log(`Service ${index + 1}:`, service); 
    
//         service.style.animation = `fadeInUp 1.5s ${index * 0.4}s forwards`;
//     });        
// }
// var menuLeft = document.querySelector(".menu-items-left");

// window.onscroll = function () {
//     var scrollPosition = window.scrollY;

//     // عندما يكون التمرير بعد 400 بكسل، شغّل الأنيمايشن
//     if (scrollPosition > 1000) {
//         menuLeft.style.animation = "MoveRight 1.5s forwards"; // تطبيق الأنيمايشن
//     }
// };
