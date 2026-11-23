function addRecommendation() {
  const recommendationInput = document.getElementById("new_recommendation");
  const recommendationText = recommendationInput.value.trim();

  if (recommendationText !== "") {
    const element = document.createElement("div");
    element.className = "recommendation";

    const openingQuote = document.createElement("span");
    openingQuote.setAttribute("aria-hidden", "true");
    openingQuote.textContent = "“";

    const message = document.createTextNode(recommendationText);

    const closingQuote = document.createElement("span");
    closingQuote.setAttribute("aria-hidden", "true");
    closingQuote.textContent = "”";

    element.append(openingQuote, message, closingQuote);
    document.getElementById("all_recommendations").appendChild(element);
    recommendationInput.value = "";

    // Show confirmation only after a non-empty recommendation is added.
    showPopup(true);
  }
}

function showPopup(bool) {
  const popup = document.getElementById("popup");
  popup.style.visibility = bool ? "visible" : "hidden";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") showPopup(false);
});