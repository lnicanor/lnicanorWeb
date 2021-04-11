
//Separamos el texto para hacer la animacion letra por letra
const text = document.querySelector('.tem');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const text2 = document.querySelector('#tem2');
text2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>");

const btnNext = document.querySelector('#darkMode');
const container = document.querySelector('.container');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const btnLogo = document.querySelector('#logo');
const btnWeb = document.querySelector('#web');
const btnApps = document.querySelector('#app');
const btnContact = document.querySelector('#contact');
btnNext.addEventListener('click', () => {

    $(document).ready(function () {
        btnNext.style.cursor = 'default';
        anime({
            targets: '.next',
            innerHTML: [0, 100],
            easing: 'easeOutQuad',
            round: 1, // Will round the animated value to 1 decimal
            duration: 5000
        })
        setTimeout(() => {
            $('.cap2').fadeOut(1000)

        }, 6000);
        //Pasar a la siguiente seccion
        setTimeout(function () {
            container.style.display = 'flex';
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

        }, 7000);
    });

});
const imgTittle = document.querySelector('.imgtittle');
const txtTittle = document.querySelector('.txtTittle');
btnLogo.addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/logo.svg";
    txtTittle.innerText = "lnicanor";
});
btnWeb.addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/web.svg";
    txtTittle.innerText = "Desarrollo web";
});
btnApps.addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/Android.svg";
    txtTittle.innerText = "Desarrollo movil";
});
btnContact.addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/contacto.svg";
    txtTittle.innerText = "Contacto";
});


