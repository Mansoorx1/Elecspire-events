const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        // Update active button

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Filter events

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
