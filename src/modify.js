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

const makeAlphabet = () => {
  const letters = document.getElementById("alphabet");
  const num = parseInt(letters.dataset.numLetters);
  for (let i = 0; i < num; i++) {
    const item = document.createElement("li");
    const character = String.fromCharCode(65 + i);
    item.textContent = `${character} is letter #${i + 1} in the alphabet`;
    letters.appendChild(item);
  } 
};
makeAlphabet();

const makeBio = () => {

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
