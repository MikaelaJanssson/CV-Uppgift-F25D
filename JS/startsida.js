//PROJEKTCARDS PÅ STARTSIDA

//Queryselector hämtar alla HTML-elemten som har klassen .card.
// ForEach går igenom card och kör koden som finns i den.
document.querySelectorAll(".card, .projektcard").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Lyssnar efter muspekaren (när den går in över elementet)

    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease-in-out"; //När muspekaren går över elementet skalar vi upp kortet under 0.3 sek.
  });

  //Lyssnar efter när pekaren lämnar kortet. kortet återgår till normal storlek.
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// ALERT PÅ STARTSIDA. Inspiration från lärarledda lektioner.
function myFunction() {
  alert("Vad kul att du är nyfiken på kommande projekt! Vi är snart klara! ");
}
