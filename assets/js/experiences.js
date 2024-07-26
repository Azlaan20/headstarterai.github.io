
    document.addEventListener("DOMContentLoaded", () => {
        const modal = document.getElementById("experienceModal");
        const closeBtn = document.querySelector(".close");
        const experienceItems = document.querySelectorAll(".experience-item");
        const experienceDetails = document.querySelectorAll(".experience-details-content");
        let activeTabId = ''; // Variable to store the ID of the active tab

        // Automatically open the first tab by default
        document.addEventListener("DOMContentLoaded", function() {
            const firstTab = document.querySelector(".tab-button");
            if (firstTab) {
                firstTab.click();
            }
        });

        // Event listener for experience items
        experienceItems.forEach(item => {
            item.addEventListener("click", () => {
                const target = item.getAttribute("data-target");
                experienceDetails.forEach(detail => {
                    detail.style.display = "none";
                });
                document.getElementById(target).style.display = "block";
                modal.style.display = "block";

                // Set the active tab based on the target
                const tabButton = document.querySelector(`.tab-button[data-target="${target}"]`);
                if (tabButton) {
                    openTab({ currentTarget: tabButton }, tabButton.getAttribute("data-target"));
                }
            });
        });

        // Close button event listener
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Click outside the modal content to close the modal
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        // Prevent modal closing when clicking inside the tab container
        const tabsContainer = document.querySelector(".tabs");
        if (tabsContainer) {
            tabsContainer.addEventListener("click", (event) => {
                event.stopPropagation(); // Prevent event from bubbling up to the window
            });
        }
    });

    function openTab(evt, tabId) {
        // Hide all tab content
        let contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.style.display = 'none');
    
        // Remove active class from all tab buttons
        let buttons = document.querySelectorAll('.tab-button');
        buttons.forEach(button => button.classList.remove('active'));
    
        // Show the selected tab content and set the clicked button as active
        document.getElementById(tabId).style.display = 'block';
        evt.currentTarget.classList.add('active');
    }
    
    function closeTab() {
        // Hide the current tab content
        document.getElementById('experience5').style.display = 'none';
    
        // Scroll to the article with id 'experience'
        document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
    
        // Optionally, you can update the URL fragment (hash) for better navigation
        window.location.hash = 'experience';
    }
    
    
    
    // Initialize by opening the first tab
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.tab-button').click();
    });
    

    // Function to keep track of the active tab when reopening
    function setActiveTab(tabName) {
        const tabButton = document.querySelector(`.tab-button[data-target="${tabName}"]`);
        if (tabButton) {
            openTab({ currentTarget: tabButton }, tabButton.getAttribute("data-target"));
        }
    }

    // Automatically open the active tab on page load
    document.addEventListener("DOMContentLoaded", function() {
        if (activeTabId) {
            setActiveTab(activeTabId);
        }
    });