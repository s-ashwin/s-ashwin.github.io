window.addEventListener('load', ()=>{
    const load = document.querySelector('.load');
    load.classList.add('load-finish'); 
    const homepage = document.querySelectorAll('.anim')
    if(homepage){
        for(let i=0; i<homepage.length; i++){
            homepage[i].classList.add('animate')
        }
    }
});