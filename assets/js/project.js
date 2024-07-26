document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("projectModal");
    const projectItems = document.querySelectorAll(".project-item");
    const projectDetails = document.querySelectorAll(".project-detail-content");
    const closeModalButtons = document.querySelectorAll(".close-modal");

    let lastOpenedProject = null;

    // Event listener for project items
    projectItems.forEach(item => {
        item.addEventListener("click", () => {
            const target = item.getAttribute("data-target");
            projectDetails.forEach(detail => {
                detail.classList.remove("active");
            });
            document.getElementById(target).classList.add("active");
            modal.style.display = "block";
            lastOpenedProject = item;
        });
    });

    // Close button event listener
    closeModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "none";
            if (lastOpenedProject) {
                lastOpenedProject.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Click outside the modal content to close the modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
