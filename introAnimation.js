//Colocamos los path's que queremos animar a nuevas pocisiones
const moonPath =
    "M40 73.0543C40 113.125 72.8257 145.609 72.8257 145.609C32.8024 145.609 0.357178 113.125 0.357178 73.0543C0.357178 32.9833 32.8024 0.499329 72.8257 0.499329C72.8257 0.499329 40 32.9833 40 73.0543Z";
const sunPath =
    "M145.294 73.0543C145.294 113.125 112.849 145.609 72.8257 145.609C32.8024 145.609 0.357178 113.125 0.357178 73.0543C0.357178 32.9833 32.8024 0.499329 72.8257 0.499329C112.849 0.499329 145.294 32.9833 145.294 73.0543Z";

//instancia a el svg de la luna para usar el atributo cursor: pointer
const darkMode = document.querySelector("#darkMode");
//la varible tooggle nos ayuda a definir las acciones de los modos de darkMode o lightMode
let toggle = false;

anime.timeline({ loop: false }).add({
    targets: '.svg',
    opacity: [0, 1],
    easing: "easeInExpo",
    duration: 1000
}).add({
    targets: '.ml5 .line',
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1000
}).add({
    targets: '.ml5 .line',
    duration: 900,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
}).add({
    targets: '.ml5 .ampersand',
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600'
}).add({
    targets: '.ml5 .letters-left',
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 900,
    offset: '-=300'
}).add({
    targets: '.ml5 .letters-right',
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 1100,
    offset: '-=600'
}).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1100,
    easing: "easeOutExpo",

}).add({
    targets: '#Nave',
    translateY: -730,
    easing: "easeInOutBack",
    duration: 2000
}).add({
    targets: '.main',
    background: '#EAEAEA',
    easing: 'easeInOutBack',
    direction: 'alternate'
}, "-=1100").add({
    targets: '.ml6 .line',
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1000
}).add({
    targets: '.ml6 .line',
    duration: 900,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
}).add({
    targets: '.ml6 #tem2 span',
    opacity: [0, 1],
    translateX: [-600, 0],
    easing: "easeOutExpo",
    duration: 900,
    offset: '-=300',
    delay: anime.stagger(100)
}).add({
    delay: 1000,
    targets: '.ml6 .letters-left',
    opacity: [1, 0],
    translateY: ["0em", -1],
    easing: "easeInQuart",
    duration: 600,
    offset: '-=300'
}).add({
    targets: '.ml6 .line',
    duration: 900,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625 * 2) + "em"
}).add({
    targets: '.ml6 .line',
    duration: 600,
    easing: "easeOutExpo",
    width: 0
}).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1100,
    easing: "easeOutExpo"

}).add({
    targets: '.tem span',
    translateY: [-600, 0],
    scale: [10, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    delay: anime.stagger(100)

}, "-=950").add({
    targets: '.tem span',
    translateY: [0, 600],
    scale: [1, 1],
    easing: "easeInCirc",
    opacity: [1, 0],
    duration: 2000,
    rotate: '6turn',
    delay: anime.stagger(100)

});
anime({
    targets: '#Mundo',
    translateY: 300,
    easing: 'easeInQuint',
    duration: 3000,
    delay: 5000
});

//Evento OnClick del svg
darkMode.addEventListener('click', () => {
    const textCap2 = document.querySelector('.textCap2');
    textCap2.innerHTML = "loading please wait...";
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    //Animacion de oscuro a claro o vicecersa
    timeline.add({
        targets: '.moon',
        d: [{ value: toggle ? sunPath : moonPath }]
    }).add({
        targets: "#darkMode",
        rotate: toggle ? 0 : 320
    }, "-=850").add({
        targets: '.main',
        background: toggle ? '#EAEAEA' : '#000000',
        easing: 'easeInOutBack',
        direction: 'alternate'
    }, "-=850").add({
        targets: '.textCap2',
        color: toggle ? '#000000' : '#ffffff',
        easing: 'easeInOutBack',
        direction: 'alternate'
    }, "-=850");

    //Definir light mode o dark mode
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }

});
/* Eliminar elementos */
const cap2 = document.querySelector('.cap2');
$(document).ready(function () {
    setTimeout(function () {
        $(".text").fadeOut(1000);
    }, 22000);
    setTimeout(function () {
        $(".cap2").fadeIn(1000);
        cap2.style.display = 'flex';
    }, 22000);

});