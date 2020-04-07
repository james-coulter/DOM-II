// Your code goes here


//click

const navColor = document.querySelectorAll('nav > a')

navColor.forEach(attr => attr.addEventListener('click', () => attr.style.color = 'orange'))

navColor.forEach(attr => attr.addEventListener('click', function(event) {
    event.preventDefault()
}))


//mouseover

const headerColor = document.querySelectorAll('.text-content > h2')

headerColor.forEach(attr => attr.addEventListener('mouseover', () => attr.style.color = 'yellow'))

navColor.forEach(attr => attr.addEventListener('mouseover', function(event) {
    event.preventDefault()
}))


//mousedown

const strongVar = document.querySelectorAll('.footer')

strongVar.forEach(attr => attr.addEventListener('mousedown', () => attr.style.background = 'purple'))

strongVar.forEach(attr => attr.addEventListener('click', () => attr.style.background = 'orange'))

//scaling

// const grow = document.querySelectorAll('.content-pick > h4')

// grow.addEventListener('mouseenter', () => {
//   grow.style.transform = 'scale(1.2)';
//   grow.style.transition = 'transform 1s';
// })


//alerts
const alerting = document.querySelectorAll('header > h2')

alerting.forEach(attr => attr.addEventListener('click', () => {
    alert("You found a secret button!")
}))

//load
const loading = document.querySelectorAll('body')

loading.forEach(attr => attr.addEventListener('load', () => {
    alert("Yay, everything loaded correctly!")
}))


window.addEventListener("keydown", event => {
    if (event.key == 'a') {
        document.body.style.background = 'aqua'
        document.body.style.visibility = 'visible'
    }
    if (event.key == 'w') {
        document.body.style.background = 'white'
        document.body.style.visibility = 'visible'
        alert('Found the lights!')
    }
    if (event.key == 'o') {
        document.body.style.background = 'orange'
        document.body.style.visibility = 'visible'
    }
    if (event.key == 'r') {
        document.body.style.background = 'red'
        document.body.style.visibility = 'visible'
    }
    if (event.key == 'y') {
        document.body.style.background = 'yellow'
        document.body.style.visibility = 'visible'
    }
    if (event.key == 'b') {
        document.body.style.background = 'black'
        document.body.style.visibility = 'hidden'
        alert("Uh oh, you're about to turn out the lights. Quick, find them!")
    }
})