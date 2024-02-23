const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const nav =document.querySelector('nav');
const nav_link=document.getElementsByClassName('nav-link')
const tglr=document.getElementById('navbr-tglr')
const myn=document.getElementById('myn')
const myln=document.getElementById('myln')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = ' rgb(255, 246, 197)';
        body.style.color = 'black';
        body.style.transition = '2s';
        nav.style.backgroundColor='gold';
        myn.style.backgroundColor='rgba(255, 235, 121, 0.864)';
        for (let i = 0; i < nav_link.length; i++) {
            nav_link[i].style.color = 'black'; // Change color to gold
            nav_link[i].style.transition='2s'
        }
        myln.style.color='black';
        tglr.classList.remove('bg-warning')
        tglr.style.transition="2s";
        nav.style.transition='2s';
        myn.style.transition='2s';
        myln.style.transition='2s';
    }else{
        body.style.background = '#313638';
        body.style.color = 'white';
        body.style.transition = '2s';
        nav.style.backgroundColor=' rgb(57, 49, 5)';
        myn.style.backgroundColor='rgb(57, 49, 5)';
        for (let i = 0; i < nav_link.length; i++) {
            nav_link[i].style.color = 'gold'; // Change color to gold
            nav_link[i].style.transition='2s'
        }
        myln.style.color='gold';
        tglr.classList.add('bg-warning')
        tglr.style.transition="2s";
        nav.style.transition='2s';
        myn.style.transition='2s';
        myln.style.transition='2s';
    }
});

