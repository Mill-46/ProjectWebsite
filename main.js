window.addEventListener('scroll', function(){
    const header = this.document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
});

// Membuat Navigation Mobile 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active") 
});

// Membuat Navigation Close
navMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
});
    
