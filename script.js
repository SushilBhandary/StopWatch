

const value = document.querySelector('#value')
const buttons = document.querySelector('.buttons')

let sec = 0
let milSec = 0
let clearmil = false

const start = () => {
    clearmil = false
    const mils = setInterval( () => {
        if (clearmil ) {
            clearInterval(mils)
            clearmil = false
        } else {
            milSec++
            if (milSec === 100 ) {
                milSec = 0;
                sec++
            }
            milSec<10 ?value.innerHTML = sec.toString()+'s 0'+milSec.toString() : value.innerHTML = sec.toString()+'s '+milSec.toString()
        }
    }, 10)

    buttons.innerHTML= 
    `<button class="butt" id="stop" onclick="paused()">Stop</button>
     <button class="butt" id="reset" onclick="reset2()">Reset</button>
    `
}


const reset2 = () => {
    clearmil = true
    sec = 0
    milSec = 0
    value.innerHTML = sec.toString()+'s 00'
    buttons.innerHTML= 
    `<button class="butt" id="start" onclick="start()">Start</button>
     <button class="butt" id="reset" onclick="reset2()">Reset</button>
    `
}

const paused = () => {
    clearmil = true
    buttons.innerHTML= 
    `<button class="butt" id="start" onclick="start()">Start</button>
     <button class="butt" id="reset" onclick="reset2()">Reset</button>
    `
}

