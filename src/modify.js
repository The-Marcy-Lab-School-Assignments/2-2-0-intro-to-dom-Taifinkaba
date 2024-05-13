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
};

const modifyDivClassList = () => {
};

const addH2 = () => {
};

const removeOldInfo = () => {
};

const makeAlphabet = () => {
};

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
