const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const projectType = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector("textarea").value;

    const data = {
        access_key:"b9099259-706e-49b6-9915-7d741be1d0d1",
        name: name,
        email: email,
        subject: `New Project Inquiry - ${projectType}`,
        message:
            `Project Type: ${projectType}\n\n` +
            `Project Details:\n${message}`
    };

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
        alert("Your message has been sent successfully!");
        contactForm.reset();
    } else {
        alert("Something went wrong. Please try again.");
    }
});
