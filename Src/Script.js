function btnToggle(){
    var e = document.body;
    e.classList.toggle("dark-mode");
}

window.localStorage;
localStorage.setItem(btnToggle(), dark-mode);
let lastname = localStorage.getItem(btnToggle());
localStorage.removeItem(btnToggle());
