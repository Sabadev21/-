const input = document.querySelector('input');
const btn = document.querySelector('button');
const h1 =document.querySelector('h1');
btn.addEventListener('click',()=>{
   showinfo();

});

function showinfo(){
const display = input.value;
h1.innerHTML=display;
};