const openBtn=document.getElementById('open-Btn');
const closeBtn=document.getElementById('close-Btn');
const popupContainer=document.querySelector('.popup-container');
openBtn.addEventListener('click',()=>{
    popupContainer.classList.add('blur');
    popupContainer.style.display='flex';

})
closeBtn.addEventListener('click',()=>{
    popupContainer.classList.remove('blur');
    popupContainer.style.display='none';
    
})
