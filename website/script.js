const btn = document.getElementById('halo')
const bg = document.querySelector('#col')
const img = document.getElementById('img')
const a = document.getElementById('c')
const lil = document.querySelector('.hall')


btn.addEventListener('click',function(){
    let satu = 'hitam';
    let dua = 'border2';
    let tiga ='border1';
    
    bg.classList.toggle(satu);
    img.classList.toggle(dua);
    setTimeout(()=>{
        img.classList.toggle(tiga)
    },600)
});
lil.addEventListener('click', function(){
   alert('comming soon cuy !!!!!!')
})
