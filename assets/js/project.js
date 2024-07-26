document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    const modal = document.getElementById('projectModal');
    const modalCloseButtons = document.querySelectorAll('.modal .close');
    const projectDetails = document.querySelectorAll('.project-detail-content');

    // Function to open the modal with the relevant project details
    function openModal(projectId) {
        // Hide all project details
        projectDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // Show the target project details
        const targetDetail = document.getElementById(projectId);
        if (targetDetail) {
            targetDetail.classList.add('active');

            // Use setTimeout to ensure that the modal is visible before scrolling
            setTimeout(() => {
                targetDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 0);
        }

        // Display the modal
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        // Remove 'active' class from all project details
        projectDetails.forEach(detail => {
            detail.classList.remove('active');
        });
    }

    // Event listener for project items to open modal
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            if (targetId) {
                openModal(targetId);
            }
        });
    });

    // Event listener for modal close buttons
    modalCloseButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            closeModal();
        });
    });

    // Event listener for clicking outside the modal content to close it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Keyboard interaction: close modal with ESC key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Handle case where project item or modal may be missing
    if (!modal || projectItems.length === 0) {
        console.warn('Modal or project items not found. Ensure HTML structure is correct.');
    }
});
