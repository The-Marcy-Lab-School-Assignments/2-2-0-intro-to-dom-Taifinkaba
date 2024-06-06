const getMainHeadingText = () => {
  const mainHead = document.querySelector("#main-heading");
  console.log(mainHead.textContent);
};
getMainHeadingText();

const getAllMainText = () => {
  const mainText = document.querySelectorAll(".main-text");
  let strText = "";

  for (let i = 0; i < mainText.length; i++) {
    strText += mainText[i].textContent;
    if (i < mainText.length - 1) {
      strText += ",";
    }
  }
  console.log(strText);
};
getAllMainText();

const setSubtitleText = () => {
  const sub = document.getElementById("subtitle");
  if(sub){
    sub.textContent = "This is a subtitle!";
  }
};
setSubtitleText();

const modifyDivClassList = () => {
  const removeAdd = document.getElementById("modify-classes");
  if(removeAdd){
    removeAdd.classList.add("new-class");
    removeAdd.classList.remove("bad-class");
  }
};
modifyDivClassList();

const addH2 = () => {
  const H2 = document.createElement("h2");
  H2.id = "h2-test";
  H2.textContent = "Another one!";
  document.body.append(H2)
};
addH2();

const removeOldInfo = () => {
  const oldElement = document.getElementById("old-info")
  if (oldElement) {
    oldElement.remove();
  }
};
removeOldInfo();
/** FEEDBACK: You are really close! Instead of using fromCharSet, you could also initialize a string with the alphabet and use that as your indexes! */
const makeAlphabet = () => {
  const alpha = document.querySelector("#alphabet")
  const count = alpha.dataset.numLetters
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for(let i = 0; i < count; i++){
    const list = document.createElement("li")
    list.textContent = `${alphabet[i]} is letter #${i + 1} in the alphabet`
    document.querySelector("#alphabet").appendChild(list)
  }
};
makeAlphabet();

/** FEEDBACK: Attempt this question! It basically requires you to use .innerHTML! And make sure that the HTML matches the one given, including the spacing and indentation! */
const makeBio = () => {
  document.getElementById('my-bio').innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`;
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
