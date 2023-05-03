let generateBtn = document.querySelector(".btn");
let memeImg = document.querySelector("img");
let memeTitle = document.querySelector(".title");
let memeAuthor = document.querySelector(".author");

const updateInfo = (url, title, author) => {
  memeImg.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
};
const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      updateInfo(data.url, data.title, data.author);
    });
};
generateBtn.addEventListener("click", generateMeme);
