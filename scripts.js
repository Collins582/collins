// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Floating Burger Menu Functionality
    const burgerButton = document.getElementById('burger-button');
    const burgerMenuContent = document.getElementById('burger-menu-content');

    if (burgerButton && burgerMenuContent) {
        burgerButton.addEventListener('click', () => {
            burgerMenuContent.classList.toggle('active');
        });
    }

    // Questions Form Submission
    const questionsForm = document.getElementById('questions-form');
    const submitQuestionButton = document.getElementById('submit-question');

    if (questionsForm && submitQuestionButton) {
        submitQuestionButton.addEventListener('click', () => {
            const email = document.getElementById('email').value.trim();
            const question = document.getElementById('question').value.trim();

            if (email === '' || question === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (question.length < 2) {
                alert('Your question must be at least 2 characters long.');
                return;
            }

            const mailtoLink = `mailto:ckigen56@gmail.com?subject=Client Question&body=Email: ${email}%0D%0AQuestion: ${question}`;
            window.location.href = mailtoLink;

            alert('Your question has been submitted successfully!');
        });
    }

    // Job Application Form Submission
    const form = document.getElementById('job-application-form');
    const submitButton = document.getElementById('submit-button');

    if (form && submitButton) {
        const urlParams = new URLSearchParams(window.location.search);
        const job = urlParams.get('job');
        if (job) {
            const jobField = document.getElementById('job');
            if (jobField) {
                jobField.value = job;
            }
        }

        submitButton.addEventListener('click', () => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const job = document.getElementById('job').value.trim();

            if (name.length < 2 || job.length < 2) {
                alert('Please ensure all fields have at least 2 characters.');
                return;
            }

            const mailtoLink = `mailto:ckigen56@gmail.com?subject=Job Application for ${job}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AJob Position: ${job}`;
            window.location.href = mailtoLink;

            alert('Submission successful!');
        });
    }

    // Slider Functionality
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = slideElements[0].clientWidth;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slideElements.length - 1 : currentIndex - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === slideElements.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
    });

    // Automatic slide change
    let currentSlide = 0;
    setInterval(() => {
        slideElements[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slideElements.length;
        slideElements[currentSlide].classList.add('active');
    }, 5000);

    // Adjust slider on window resize
    window.addEventListener('resize', updateSlider);

    // Email input validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', () => {
        if (!emailInput.validity.valid) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = 'green';
        }
    });

    // Intersection Observer for fade-in effect
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    });

        sections.forEach(section => observer.observe(section));
    });
