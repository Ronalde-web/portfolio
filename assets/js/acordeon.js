

window.onload = () => {    
const acordeonTriggers = document.querySelectorAll('.accordion-action')


function acordeon(event) {
    const accordionContent = event.target.parentNode

    if (accordionContent.classList.contains("open")) {
        accordionContent.classList.remove("open")
    } else {
        accordionContent.classList.add("open")

    }
}

acordeonTriggers.forEach((element) => {

    element.addEventListener('click', acordeon)

})

}   
