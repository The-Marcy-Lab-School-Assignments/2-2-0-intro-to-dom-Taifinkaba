const body = document.querySelector('body');

const header = document.createElement('h1');
header.id = 'main-heading';
header.textContent = 'Hello World!';
body.appendChild(header);

const para = document.createElement('p');
para.id = 'main-text';
para.className = 'boring-text';
para.textContent = "Look, I'm some text!";
body.appendChild(para);