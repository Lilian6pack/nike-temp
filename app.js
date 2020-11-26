window.onload = function() {
    let t1 = new TimelineMax()
    TweenMax.set('body', {opacity: 1})
    TweenMax.set('.shoe-title', {opacity: 1})
    t1
        .from('.navbar', 0.7, {opacity: 0, y: -50, delay: 0.5})
        .from('.line2', 0.5, {height: 0})
        .from('.line1', 0.5, {height: 0}, '-=0.5')
        .from('.swiper-container', 0.5, {opacity: 0, y: -100}, '-=0.5')
        .from('.line', 0.5, {width: 0})
        .from('.lines', 0.5, {width: 0}, '-=0.5')
        .staggerFrom('.text', 0.5, {opacity: 0, y: -90}, 0.3, '-=0.5')
        .from('.myleft', 0.5 ,{opacity: 0})
        .from('.trait', 0.5, {width: 0, opacity: 0}, '-=0.5')
        .from('.shoe-title', 0.5, {opacity: 0, delay: 0.2})
}
var swiper = new Swiper('.swiper-container', {
    touchStartPreventDefault: false,
});


const threshold = .8;
const brand = document.querySelector('.brand')
const nikeli = document.querySelectorAll('.nikeli')
const jordanli = document.querySelectorAll('.jordanli')
const adidasli = document.querySelectorAll('.adidasli')



const activate = function (elem) {
    const id = elem.getAttribute('id')
    const anchor = document.querySelector(`.${id}`)
    if (anchor === null){
        return null
    }
    anchor.parentElement
        .querySelectorAll('.active')
        .forEach(node => node.classList.remove('active'))
    anchor.classList.add('active')
    
}
const shoeTitle = document.querySelector('.shoe-title')
const callback = function (entries, observer ){
    entries.forEach(function (entry){
        if (entry.intersectionRatio > threshold){
            activate(entry.target)
            switch(entry.target.id){
                case 'section1':
                    brand.innerText = 'NIKE'
                    shoeTitle.innerText = "THE 10: AIR MAX 90 OFF WHITE";
                    adidasli.forEach(adidas => adidas.style.display = 'none')
                    jordanli.forEach(jordan => jordan.style.display = 'none')
                    nikeli.forEach(nike => nike.style.display = 'block')

                break;
                case 'section2':
                    brand.innerText = 'JORDAN'
                    shoeTitle.innerText = "AIR JORDAN 1 LOW";
                    adidasli.forEach(adidas => adidas.style.display = 'none')
                    jordanli.forEach(jordan => jordan.style.display = 'block')
                    nikeli.forEach(nike => nike.style.display = 'none')

                break;
                case 'section3':
                    brand.innerText = 'ADIDAS'
                    shoeTitle.innerText = 'YEEZY DESERT RAT 500';
                    adidasli.forEach(adidas => adidas.style.display = 'block')
                    jordanli.forEach(jordan => jordan.style.display = 'none')
                    nikeli.forEach(nike => nike.style.display = 'none')

                break;
            }
        }
        
    })
}
const spies = document.querySelectorAll('[data-spy]')
if (spies.length > 0){
    const observer = new IntersectionObserver(callback, {
        threshold: threshold
    })
    spies.forEach(function(spy){
        observer.observe(spy)
    })
}

const cursor = document.querySelector('.cursor')
const swiperContainer = document.querySelector('.swiper-container')

swiperContainer.addEventListener('mousemove', (e) => {
    cursor.style.visibility = "visible"
    cursor.style.opacity = "1"
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + 'px';
})


swiperContainer.addEventListener('mouseleave', (e) => {
    cursor.style.visibility = "hidden"
    cursor.style.opacity = "0"
})



const plus = document.querySelector('.plus')
const tl1 = new TimelineMax({paused: true})
tl1.staggerTo('.strip', 0.5, {bottom: 0}, 0.1)
    .staggerFrom('.strip li', 0.5, {y: 50, opacity: 0}, 0.05, '-=2')
    .from('.brand', 0.5, {y: 40, opacity: 0}, '-=2.5')
    plus.addEventListener('click', () => {
        tl1.play()
    })

const close = document.querySelector('.fa-times')
close.addEventListener('click', () =>{
    tl1.reverse()
})

