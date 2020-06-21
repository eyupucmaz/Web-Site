let checkbox = document.querySelector(".switch-input");

checkbox.addEventListener("change", function () {
     let theme = document.querySelector("#theme");
     if (this.checked) {
          theme.setAttribute("href", "./style/dark.css");
     } else {
          theme.setAttribute("href", "./style/main.css");
     }
});
console.log("--------------\n-HELLO WORLD!-\n--------------");
