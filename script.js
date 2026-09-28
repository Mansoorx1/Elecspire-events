const filters = document.querySelectorAll(".filter");

const cards = document.querySelectorAll(".event-card");


filters.forEach(filter => {

  filter.addEventListener("click", () => {

    // Remove active state
    filters.forEach(button => {
      button.classList.remove("active");
    });

    // Activate clicked button
    filter.classList.add("active");

    const category = filter.dataset.filter;


    // Show / hide cards
    cards.forEach(card => {

      if (
        category === "all" ||
        card.classList.contains(category)
      ) {

        card.style.display = "";

      } else {

        card.style.display = "none";

      }

    });

  });

});
