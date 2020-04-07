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

const grow = document.querySelectorAll('.content-pick > h4')

grow.addEventListener('mouseenter', () => {
  grow.style.transform = 'scale(1.2)';
  grow.style.transition = 'transform 1s';
})