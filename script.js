const searchInput = document.querySelector(".search input");
const games = document.querySelectorAll(".game");

searchInput.addEventListener("input", function () {

    const search = searchInput.value.toLowerCase();

    games.forEach(function (game) {

        const name = game.querySelector("h3").textContent.toLowerCase();

        if (name.includes(search)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }

    });

});