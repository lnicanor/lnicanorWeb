
//Separamos el texto para hacer la animacion letra por letra
const text = document.querySelector('.tem');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const text2 = document.querySelector('#tem2');
text2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>");

//Colocamos los path's que queremos animar a nuevas pocisiones
const moonPath =
    "M40 73.0543C40 113.125 72.8257 145.609 72.8257 145.609C32.8024 145.609 0.357178 113.125 0.357178 73.0543C0.357178 32.9833 32.8024 0.499329 72.8257 0.499329C72.8257 0.499329 40 32.9833 40 73.0543Z";
const sunPath =
    "M145.294 73.0543C145.294 113.125 112.849 145.609 72.8257 145.609C32.8024 145.609 0.357178 113.125 0.357178 73.0543C0.357178 32.9833 32.8024 0.499329 72.8257 0.499329C112.849 0.499329 145.294 32.9833 145.294 73.0543Z";

//instancia a el svg de la luna para usar el atributo cursor: pointer
const darkMode = document.querySelector("#darkMode");
//la varible tooggle nos ayuda a definir las acciones de los modos de darkMode o lightMode
let toggle = false;
const btnNext = document.querySelector('.next');

//Animacion de todo el capitulo 1 
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
    background: '#000000',
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
    const textCap2 = document.querySelector('#SM');
    textCap2.innerHTML = toggle ? "moon." : " sun.";
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    //Animacion de oscuro a claro o vicecersa
    timeline.add({
        targets: '.moon',
        d: [{ value: toggle ? moonPath : sunPath }]
    }).add({
        targets: "#darkMode",
        rotate: toggle ? 320 : 0
    }, "-=850").add({
        targets: '.main',
        background: toggle ? '#000000' : '#EAEAEA',
        easing: 'easeInOutBack',
        direction: 'alternate'
    }, "-=850").add({
        targets: '.textCap2',
        color: toggle ? '#c0f3f2' : '#000000',
        easing: 'easeInOutBack',
        direction: 'alternate'
    }, "-=850").add({
        targets: '.next',
        background: toggle ? '#000000' : '#EAEAEA',
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
const cap = document.querySelector('.cap2')
$(document).ready(function () {
    setTimeout(function () {
        $(".text").fadeOut(1000);
    }, 22000);
    setTimeout(function () {
        cap.style.display = 'flex';
    }, 22000);

});

const container = document.querySelector('.container')
btnNext.addEventListener('click', () => {

    $(document).ready(function () {
        $('.cap2').fadeOut(1000)
        setTimeout(function () {
            container.style.display = 'flex';
        }, 2000);
    });
    var gradients = {
        start: '#321575',
        end: '#00dbde',
    }
    var el = document.querySelector('.main');
    var animation = anime({
        targets: gradients,
        start: '#5595e9',
        end: '#ab31dc',
        duration: 3000,
        easing: 'easeOutQuad',
        round: 1,
        // PONER EN TRUE PARA HACER UN BACKGROUND ANIMADO
        loop: false,
        direction: 'alternate',
        update: function (a) {
            var value1 = a.animations[0].currentValue;
            var value2 = a.animations[1].currentValue;
            el.style.backgroundImage = 'linear-gradient(320deg, ' + value1 + ' 25%, ' + value2 + ' 100%)'
        }
    });
});
