const btn = document.querySelector('.fas');
const links = document.querySelector('.links');
const sclinks = document.querySelector('.social-icons');



btn.addEventListener('click',(e)=>{
    console.log(e.target);
    links.classList.toggle('show-links');
    //sclinks.classList.toggle('social-icons');
})