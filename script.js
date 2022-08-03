function openNav() {
    document.getElementById("myNavbar").style.width = "100%";
}
  
  function closeNav() {
    document.getElementById("myNavbar").style.width = "0%";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();


        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});