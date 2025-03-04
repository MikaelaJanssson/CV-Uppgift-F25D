//RENDERAR JSON FIL

// När hela dokumentet har laddats, kör funktionen main
window.addEventListener("DOMContentLoaded", main);

// Huvudfunktionen som körs när sidan har laddats
function main() {
  renderPortfolio(); // Anropar funktionen renderPortfolio för att visa arbetsplatserna
}

// Funktion som hämtar arbetsplatser från workplace.json
function renderPortfolio() {
  // Använder fetch API för att hämta workplace.json-filen
  fetch("/JSON/workplace.json")
    .then((response) => response.json()) // Konverterar svaret till JSON
    .then((data) => {
      // Hittar elementet med id "workplaces" i HTML-dokumentet
      const container = document.getElementById("workplaces");

      // går genom varje arbetsplats i den hämtade JSON-datan
      data.forEach((workplace) => {
        // Skapar ett nytt div-element för varje arbetsplats
        const workplaceElement = document.createElement("div");

        // Tilldela en CSS-klass till div-elementet
        workplaceElement.className = "workplace";

        // Sätter innerHTML för div-elementet med arbetsplatsens information
        workplaceElement.innerHTML = ` 
          <h2>${workplace.company}</h2>
          <h3>${workplace.title}</h3>
          <p><strong>Years:</strong> ${workplace.years}</p>
          <p><strong>Description:</strong> ${workplace.description}</p>`;

        // Lägger till det nya div-elementet i container-elementet
        container.appendChild(workplaceElement);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error)); // Hanterar eventuella fel vid hämtning av JSON
}
