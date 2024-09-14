const scrollContainer=document.querySelector('.gallary');
const backBtn=document.getElementById('backBtn');
const nextBtn=document.getElementById('nextBtn');
scrollContainer.addEventListener('wheel',(evt)=>{
         evt.preventDefault();
         scrollContainer.scrollLeft +=evt.deltaY;
         scrollContainer.style.scrollBehavior="auto";
})
backBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft -=900;

})
nextBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft +=900;
    
})