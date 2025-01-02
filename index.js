let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

setInterval(function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
},10000)

let url = window.location.pathname
console.log("ulr actual "+url)