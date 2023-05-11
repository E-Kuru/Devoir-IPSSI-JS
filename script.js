// Exercice 1 

// Initiation des éléments HTML 

const passwordP = document.getElementById('password')
const passwordButton = document.getElementById('password-button')

// Tableau contenant tous les caractères 
const characters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "-", "_", "+", "=", "{", "}", "?", "!", "§", ":", ";", ".", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// On implémente un element aléatoire du tableau 
// characters dans le password sous forme de string

// var randomCharacter =  characters[Math.floor(Math.random() * characters.length)]
// password += randomCharacter

const randomPassword = () => {
    let password = ""
    for (let i = 0; i < 20; i++){
        var randomCharacter =  characters[Math.floor(Math.random() * characters.length)]
        password += randomCharacter
    }
    passwordP.style.display = "block"
    passwordP.innerHTML = password
    return password
};

// Question 2 

// Initiation des éléments HTML 

const converterButton = document.getElementById('temperature')
const temperature = document.getElementById('temp')
const resultTemp = document.getElementById('resultTemp')

// Degrés Celsius to Fahrenheit = (x °C × 9/5) + 32 
// Fahrenheit to Degrés Celsius = (x °F − 32) × 5/9

const convertTemp = (temp) => {
    let res = ""
    let inputTemp = temperature.value
    if(temp === "d"){
        res = Math.round((inputTemp - 32) * 5/9)
        resultTemp.innerHTML =  `Il fait ${res}°C`
    } else {
        res = Math.round((inputTemp * 9/5) + 32)
        resultTemp.innerHTML =  `Il fait ${res}°F`
    }
    return res
}

// Question 3 

// Tableau de citations 

const citations = ["Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur", "Le courage est le juste milieu entre la peur et l'audace", "La mélancolie, c'est le bonheur d'être triste.", "Philosopher n'est qu'une façon de raisonner la mélancolie."]


const generateCitation = () => {
    var randomCitation =  citations[Math.floor(Math.random() * citations.length)]
    alert(randomCitation)
}

// Question 4 

// Initiation des éléments HTML 

const buttonMode = document.getElementById('changeMode')
const body = document.querySelector('body')
const changeText = document.getElementById('textChange')

// Variable permettant le toogle

let mode = "light"

const changeMode = () => {
    if(mode === "light"){
        buttonMode.style = 'background-color : #727271; color: #CFCFCF'
        body.style = "background-color : black; color: white"
        changeText.style = "background-color : #727271; color: #A90000"
        changeText.innerHTML = "Trop d'obscurité dans mon âme !!!"
        buttonMode.innerHTML = "Retourne dans la lumière"
        mode = "dark"
    } else {
        buttonMode.style = 'background-color : white; color: #black'
        body.style = "background-color : white; color: black"
        changeText.style = "background-color : none; color: #black"
        changeText.innerHTML = "Trop de lumière..."
        buttonMode.innerHTML = "Vas dans l'obscurité"
        mode = "light"
    }
}

// Question 5 

// Initiation des éléments HTML 

const imgBurger = document.getElementById('img-burger')
const listeBurger = document.getElementById('liste-burger')
 
// Varibale permettant le toogle 
let statu = "close"

const burger = () => {
    if(statu === "close"){
        imgBurger.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-512/free-x-53-433952.png?f=avif&w=512')
        listeBurger.style = 'transition : ease-in-out 0.5s; text-indent: 5em;'
        statu = 'open'
    } else {
        imgBurger.setAttribute('src', './7124209_menu_icon.png')
        listeBurger.style = 'transition : ease-in-out 0.5s; text-indent: -80em;'
        statu = "close"
    }
}