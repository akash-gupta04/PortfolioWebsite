let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offset;
        let height = sec.offsetTop -150;
    });
};
var typed = new Typed(".typing", {
  strings: ["Django Developer","Backend Developer", "Gamer","Data Science Aspirant"],
  typeSpeed: 150,
  backspeed: 150,
  looped: true,
  });