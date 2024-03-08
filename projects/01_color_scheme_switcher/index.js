const colorBtns = document.querySelectorAll(".button");
const pageBody = document.querySelector(`body`);
const headingText = document.querySelector(".heading");
const bottomText = document.querySelector(".text");

colorBtns.forEach(function (btn) {
  //   console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "black") {
      pageBody.style.backgroundColor = e.target.id;
      headingText.style.color = "#ffffff";
      bottomText.style.color = "#ffffff";
    }
    if (e.target.id === "white") {
      pageBody.style.backgroundColor = e.target.id;
      headingText.style.color = "#000000";
      bottomText.style.color = "#000000";
    }
    if (e.target.id === "navy") {
      pageBody.style.backgroundColor = e.target.id;
      headingText.style.color = "#ffffff";
      bottomText.style.color = "#ffffff";
    }
    if (e.target.id === "orange") {
      pageBody.style.backgroundColor = e.target.id;
      headingText.style.color = "#000000";
      bottomText.style.color = "#000000";
    }
  });
});
