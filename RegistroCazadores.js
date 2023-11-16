// Example: registerCazador.js
//.net for the controller

// Function to handle form submission
function handleFormSubmission() {
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        birthDate: document.getElementById('birthDate').value,

        phoneNumber: document.getElementById('phoneNumber').value,
        email: document.getElementById('emailAddress').value,
        password: document.getElementById('password').value,

        state: document.getElementById('stateAddress').value,
        city: document.getElementById('cityAddress').value,
        address: document.getElementById('streetAddress').value,

        projectTour: document.getElementById('girodeProyectos').value,
        // Add other form fields as needed
    };
    // Perform validation if needed

    // Send data to the server (you need to replace the URL with your actual server endpoint)
    fetch('http://localhost:8080/signupCazador', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            console.log('After fetch, before response.json()');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('After response.json(), before redirect');
            console.log('Server Response:', data);
            // Redirect to another page or perform other actions if desired
            console.log(formData);
            console.log("This works fine")
            window.location.href = "HomeViewCazador.html";
            console.log("This works fine")
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    const cazadorForm = document.getElementById('cazadorForm');
    cazadorForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        handleFormSubmission();
    });
});

function handleFormSubmissionTalent() {
    // Get form data
    const formDataTalento = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        birthDate: document.getElementById('birthDate').value,

        phoneNumber: document.getElementById('phoneNumber').value,
        email: document.getElementById('emailAddress').value,
        password: document.getElementById('password').value,

        state: document.getElementById('stateAddress').value,
        city: document.getElementById('cityAddress').value,
        address: document.getElementById('streetAddress').value,

        industry: document.getElementById("industry").value,
        costPerHour: document.getElementById("costperHour").value,
        disponibility: document.getElementById("disponibility").value,
        // Add other form fields as needed
    };
    // Perform validation if needed

    // Send data to the server (you need to replace the URL with your actual server endpoint)
    fetch('http://localhost:8080/signuptalento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataTalento),
    })
        .then(response => {
            console.log('After fetch, before response.json()');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('After response.json(), before redirect');
            console.log('Server Response:', data);
            // Redirect to another page or perform other actions if desired
            window.location.href = "HomeViewTalento.html";
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    const talentoForm = document.getElementById('talentoForm');
    talentoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        handleFormSubmissionTalent();
    });
});


function handleFormSubmissionProject() {
    // Get form data
    const formDataProject = {
        projectName: document.getElementById("nombreProyecto").value,
        projectDes: document.getElementById("descripcionProyecto").value,
        projectReq: document.getElementById("requerimientos").value,
        projectState: document.getElementById("estado").value,
        projectTalents: document.getElementById("numerodetalentos").value,
        // Add other form fields as needed
    };
    // Perform validation if needed

    // Send data to the server (you need to replace the URL with your actual server endpoint)
    fetch('http://localhost:8080/submitProject' ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataProject),
    })
        .then(response => {
            console.log('After fetch, before response.json()');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('After response.json(), before redirect');
            console.log('Server Response:', data);
            // Redirect to another page or perform other actions if desired
            window.location.href = "PagoView.html";
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    const projectForm = document.getElementById('projectForm');
    projectForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        handleFormSubmissionProject();
    });
});