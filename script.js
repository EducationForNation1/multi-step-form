const steps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".step");
let currentStep = 0;

function showStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });

    progressSteps.forEach((step, index) => {
        step.classList.toggle("active", index <= currentStep);
    });
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
}

// Initialize Form
showStep();

// Form Submission
document.getElementById("multiStepForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form Submitted Successfully!");
});
