document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('superheroForm');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = document.getElementById('submitBtn');
    const newApplicationBtn = document.getElementById('newApplicationBtn');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission (you can replace this with actual form submission logic)
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';

            setTimeout(() => {
                form.reset();
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Application';
            }, 1500); // Simulating a delay for form submission
        }
    });

    newApplicationBtn.addEventListener('click', function() {
        successMessage.classList.add('hidden');
        form.style.display = 'block';
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        return isValid;
    }
});