const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state
        button.classList.add("active");

        const filter = button.dataset.filter;

        eventCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else if (card.classList.contains(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
