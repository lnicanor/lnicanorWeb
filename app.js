const items = document.getElementsByClassName("btnMenu");  // [div, div, div]
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const imgTittle = document.querySelector('.imgtittle');
const txtTittle = document.getElementsByClassName("txtTittle");
const lnicanor = document.querySelector('.lnicanor');
const dweb = document.querySelector('.dweb');
const android = document.querySelector('.android');
const contact = document.querySelector('.contact');
const imgWeb = document.querySelector('.imgWeb');
const txtWeb = document.querySelector('.TextWeb');

//div lnicanor
items[0].addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/logo.svg";
    txtTittle[0].innerText = "lnicanor";
    lnicanor.style.display = 'block';
    dweb.style.display = 'none';
    android.style.display = 'none';
    contact.style.display = 'none';
});
//div desarrollo web
items[1].addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/web.svg";
    txtTittle[0].innerText = "Desarrolo web";
    dweb.style.display = 'flex';
    lnicanor.style.display = 'none';
    android.style.display = 'none';
    contact.style.display = 'none';

});
//div Android
items[2].addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/Android.svg";
    txtTittle[0].innerText = "Aplicaciones moviles";
    android.style.display = 'flex';
    dweb.style.display = 'none';
    lnicanor.style.display = 'none';
    contact.style.display = 'none';
});
//div Contacto
items[3].addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/contacto.svg";
    txtTittle[0].innerText = "Contacto";
    contact.style.display = 'flex';
    android.style.display = 'none';
    dweb.style.display = 'none';
    lnicanor.style.display = 'none';
});
//div lnicanor movil
items[4].addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/logo.svg";
    txtTittle[1].innerText = "lnicanor";
    lnicanor.style.display = 'block';
    dweb.style.display = 'none';
    android.style.display = 'none';
    contact.style.display = 'none';
});
//div desarrollo web movil
items[5].addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/web.svg";
    dweb.style.display = 'flex';
    lnicanor.style.display = 'none';
    android.style.display = 'none';
    contact.style.display = 'none';
});
//div Android movil
items[6].addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/Android.svg";
    txtTittle[1].innerText = "Aplicaciones moviles";
    android.style.display = 'flex';
    dweb.style.display = 'none';
    lnicanor.style.display = 'none';
    contact.style.display = 'none';
});
//div Contacto movil
items[7].addEventListener('click', () => {
    imgTittle.src = "img/icons-menu/contacto.svg";
    txtTittle[1].innerText = "Contacto";
    contact.style.display = 'flex';
    android.style.display = 'none';
    dweb.style.display = 'none';
    lnicanor.style.display = 'none';
});
btn1.addEventListener('click', () => {
    btn1.style.background = "rgba(0, 162, 173, 0.56)";
    btn2.style.background = "#3f67ce6b";
    btn3.style.background = "#3f67ce6b";
    imgWeb.src = "img/svgs/1.svg";
    txtWeb.innerHTML = '-Crea una presencia en línea o materializa tu gran idea.</br></br> -Desarrollo de sitios web informativos, modernos y profesionales.</br ></br >-Sitios web a la medida de tus    especificaciones, adaptables a cualquier dispositivo implementando tecnologías a la vanguardia   de la industria.';
});
btn2.addEventListener('click', () => {
    btn2.style.background = "rgba(0, 162, 173, 0.56)";
    btn1.style.background = "#3f67ce6b";
    btn3.style.background = "#3f67ce6b";
    imgWeb.src = "img/svgs/2.svg";
    txtWeb.innerHTML = "En la era digital, donde cada vez más el primer paso para la adquisición de un bien o servicio comienza en Internet, contar con un elemento de “presentación” en la Red es imprescindible.</br ></br >Vendas por Internet o no, una página web hoy en día es un elemento esencial para las empresas, tanto como la oficina ó el local donde atiendes a tus clientes o tu número de atención telefónica.";
});
btn3.addEventListener('click', () => {
    btn3.style.background = "rgba(0, 162, 173, 0.56)";
    btn1.style.background = "#3f67ce6b";
    btn2.style.background = "#3f67ce6b";
    imgWeb.src = "img/svgs/3.svg";
    txtWeb.innerHTML = "Aun estamos trabajando en esta sección.";
});

