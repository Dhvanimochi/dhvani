let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text =document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    namefield.style.maxHeght ='0';
    title.innerHTML='Sign In';
    title.innerHTML='Sign In';
    
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform='traslatex(35px)';

});
signInBtn.addEventListener('click',()=>{
    namefield.style.maxHeght ='60';
    title.innerHTML='Sign Up';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform='traslatex(0)';
      
});
