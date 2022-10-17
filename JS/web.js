const logInForm= document.querySelector(".login-form");
const loginInput=document.querySelector(".login-form input")
const greeting= document.querySelector(".greeting")
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";


function paintGreeting(username){
    greeting.innerText=`welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function enterSubmit(event){
    event.preventDefault();
    logInForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    paintGreeting(username)
    localStorage.setItem(USERNAME_KEY,username);
}
const saveUserName = localStorage.getItem(USERNAME_KEY);
if(saveUserName===null){
    logInForm.classList.remove(HIDDEN_CLASSNAME);
    logInForm.addEventListener("submit",enterSubmit);
} else{
    paintGreeting(saveUserName);
    
}













