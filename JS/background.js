const images=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const chooseImage=images[Math.floor(Math.random()*images.length)];

const backGroundImg= document.createElement("img");

backGroundImg.src=`img/${chooseImage}`;

document.body.appendChild(backGroundImg);