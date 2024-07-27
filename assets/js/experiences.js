document.addEventListener('DOMContentLoaded', () => {
    const experienceItems = document.querySelectorAll('.experience-item');
    const modal = document.getElementById('experienceModal');
    const modalCloseButtons = document.querySelectorAll('.modal .close');
    const experienceDetails = document.querySelectorAll('.experience-details-content');

    // Function to open the modal with the relevant experience details
    function openModal(experienceId) {
        // Hide all experience details
        experienceDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // Show the target experience details
        const targetDetail = document.getElementById(experienceId);
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
        // Remove 'active' class from all experience details
        experienceDetails.forEach(detail => {
            detail.classList.remove('active');
        });
    }

    // Event listener for experience items to open modal
    experienceItems.forEach(item => {
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

    // Handle case where modal or experience items may be missing
    if (!modal || experienceItems.length === 0) {
        console.warn('Modal or experience items not found. Ensure HTML structure is correct.');
    }
});
