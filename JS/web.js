const logInForm= document.querySelector(".login-form");
const loginInput=document.querySelector(".login-form input")
const greeting= document.querySelector(".greeting")
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";
const greetingText=[
    {text:"Empower yourself"},
    {text:"Good afternoon"},
    {text:"안녕하세요!"},
    {text:"반가워요!"},
];
const randomGreetingT=greetingText[Math.floor(Math.random()*greetingText.length)];
const greetingRspace= document.createElement("span");
greeting.append(greetingRspace);

function paintGreeting(username){
    greeting.innerText=`${randomGreetingT.text} ${username}`;
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











