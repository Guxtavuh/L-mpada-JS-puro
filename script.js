const turOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

turOn.addEventListener('click', lampOn);

turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);

lamp.addEventListener('mouseleave', lampOff);

lamp.addEventListener('dblclick', lampBroken);


function isLampBroken(){
    return lamp.src.indexOf ('Quebrada') > -1
};

function lampOn(){
    if(!isLampBroken() ){
        lamp.src= './img/on.jpg'
    }
}

function lampOff(){
    if(!isLampBroken() ){
        lamp.src= './img/off.jpg'
    }
}

function lampBroken(){
    lamp.src = './img/quebrado.jpg'
}

function blink(){
    let intervalo = 0;
    let contador = 0;
    while(contador < 10){
        intervalo +=300;
        setTimeout("document.getElementById('lamp').src='./img/on.jpg';", intervalo);
        intervalo +=300;
        setTimeout("document.getElementById('lamp').src='./img/off.jpg';", intervalo);
        contador++
    }
}