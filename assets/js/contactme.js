document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("Contact form not found.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const submitButton = form.querySelector("input[type='submit'], button[type='submit']");
        const originalText = submitButton ? (submitButton.value || submitButton.textContent) : "Send Message";

        if (submitButton) {
            submitButton.disabled = true;
            if (submitButton.tagName.toLowerCase() === "input") {
                submitButton.value = "Sending...";
            } else {
                submitButton.textContent = "Sending...";
            }
        }

        emailjs.sendForm(
            "service_tihj3zz",
            "template_4rmi9bn",
            form,
            {
                publicKey: "7VNugz82L2_fC-d_8"
            }
        )
        .then(function (response) {
            console.log("EmailJS SUCCESS:", response);
            alert("Your message has been sent.");
            form.reset();
        })
        .catch(function (error) {
            console.error("EmailJS FAILED:", error);
            alert("There was an error sending your message. Please try again later.");
        })
        .finally(function () {
            if (submitButton) {
                submitButton.disabled = false;
                if (submitButton.tagName.toLowerCase() === "input") {
                    submitButton.value = originalText;
                } else {
                    submitButton.textContent = originalText;
                }
            }
        });
    });
});