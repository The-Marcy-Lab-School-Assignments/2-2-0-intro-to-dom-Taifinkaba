const getMainHeadingText = () => {
  const mainHead = document.querySelector("#main-heading");
  console.log(mainHead.textContent);
};
getMainHeadingText();

const getAllMainText = () => {
};

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
