const slides = document.querySelectorAll('.slide')

const nextBtn = document.querySelector('#nextBtn')

const prevBtn = document.querySelector('#prevBtn')

const links = document.querySelectorAll('a')

const auto  = true

const interval = 7000

let slideInterval


console.log(slides, nextBtn, prevBtn, links)


links.forEach(links => {
    
    links.setAttribute('target', '_blank')

})



const nextSlide = () =>{

       const current = document.querySelector('#current')

       current.removeAttribute('id')

    //    console.log(current)



    if (current.nextElementSibling) {
        
        current.nextElementSibling.setAttribute('id', 'current')

    } else {

        slides[0].setAttribute('id', 'current')
        
    }

    setTimeout(() => {
        
        current.removeAttribute('id')

    })

    console.log('working')


}


const prevSlide = () =>{

       let current = document.querySelector('#current')

       current.removeAttribute('id')

    //    console.log(current)



    if (current.previousElementSibling) {
        
        current.previousElementSibling.setAttribute('id', 'current')

    } else {

        slides[slides.length - 1].setAttribute('id', 'current')
        
    }

    setTimeout(() => {
        
        current.removeAttribute('id')

    })

    console.log('perfect')


}



nextBtn.addEventListener('click', e =>{

    nextSlide()

    if (auto) {
        
        clearInterval()

    }

})


prevBtn.addEventListener('click', e =>{

    prevSlide()

})





if (auto) {
    
    slideInterval = setInterval(() => {
        
        nextSlide()
    
    }, interval)

}