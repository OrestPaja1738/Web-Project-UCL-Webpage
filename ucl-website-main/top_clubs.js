document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("clubSearchBar");
  const cards = Array.from(document.querySelectorAll(".clubs-container .flip-card"));

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    cards.forEach(card => {
      const titleElement = card.querySelector(".flip-card-front h3");
      const name = titleElement ? titleElement.textContent.toLowerCase() : "";

      if (!query || name.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});