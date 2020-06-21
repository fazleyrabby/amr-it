const root = document.documentElement;
const sections = document.querySelectorAll('section');
let header = document.getElementById('fixed');
const navToggle = document.querySelector('.navbar-toggler'); 
const nav = document.querySelector('.navbar-col'); 
// const navHeight = getComputedStyle(root).getPropertyValue('--nav-active-height');
// const navWidth = getComputedStyle(root).getPropertyValue('--nav-active-width');



const options = {
    rootMargin: '-50px 0px -55%'
}

let observer = new IntersectionObserver(navCheck, options);


window.onscroll = function () {
    scrollFunction() 
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        header.classList.add("fixed");

    } else {    
        header.classList.remove("fixed");
    }
}

function navCheck(elms){
    elms.forEach(elm => {
        const id = elm.target.getAttribute('id');
        const currentlyActive  = document.querySelector(`.nav-item .nav-link.active`);
        const shouldBeActive = document.querySelector(`.nav-item .nav-link[data-page=${id}]`);
        
        // let positionInfo = shouldBeActive.getBoundingClientRect();
        // let height = positionInfo.height;
        // let width = positionInfo.width;
        shouldBeActive.addEventListener('click', e => {
            setTimeout(() => {
                navToggle.setAttribute('aria-expanded', 'false')
                nav.classList.remove('collapse');
                nav.classList.remove('show');
            }, 500);
        })

        if (elm.isIntersecting) {

            
            // shouldBeActive.classList.toggle('active');
            if (currentlyActive) {
                currentlyActive.classList.remove('active');
            }
    
            if (shouldBeActive) {
                shouldBeActive.classList.add('active');
                // root.style.setProperty("--nav-active-height", `${height}px`);
                // root.style.setProperty("--nav-active-width", `${width}px`);
            }
        }

        

     

        
    })
}

sections.forEach(section =>{
    observer.observe(section);
})