
console.log("Привет, мир!");

let userName = null;
try {
    userName = prompt("Как вас зовут?");
} catch (e) {
    console.log("prompt() недоступен: " + e.message);
}

if (userName) {
    alert("Привет, " + userName + "!");
} else {
    console.log("Привет, незнакомец!");
}


const myButton = document.getElementById("myBtn");
myButton.addEventListener("click", function () {
    alert("Кнопка нажата!");
});


let clickCount = 0;
const counterButton = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");

counterButton.addEventListener("click", function () {
    clickCount = clickCount + 1;           // увеличиваем счётчик на единицу
    counterValue.textContent = clickCount; // показываем значение на странице
    console.log("Кликов: " + clickCount);  // выводим значение в консоль
});
