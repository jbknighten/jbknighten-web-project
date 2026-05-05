document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        message.textContent =
            "Welcome, " + nameInput.value + "! You successfully used JavaScript.";
    });
});