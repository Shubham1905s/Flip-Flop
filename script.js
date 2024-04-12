document.addEventListener("DOMContentLoaded", function() {
    const coin = document.getElementById("coin");
    const headsCount = document.getElementById("heads-count");
    const tailsCount = document.getElementById("tails-count");
    const flipButton = document.getElementById("flip-button");
    const resetButton = document.getElementById("reset-button");

    let heads = 0;
    let tails = 0;

    flipButton.addEventListener("click", function() {
        coin.classList.toggle("flip");
        const result = Math.random() < 0.5 ? "heads" : "tails";
        if (result === "heads") {
            document.getElementById("")
            heads++;
            headsCount.textContent = `Heads: ${heads}`;
        } else {
            tails++;
            tailsCount.textContent = `Tails: ${tails}`;
        }
    });

    resetButton.addEventListener("click", function() {
        heads = 0;
        tails = 0;
        headsCount.textContent = "Heads: 0";
        tailsCount.textContent = "Tails: 0";
    });
});
