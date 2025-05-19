document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".more-btn").forEach(button => {
        button.addEventListener("click", function () {
            const targetPage = this.getAttribute("data-target");
            if (targetPage) window.location.href = targetPage;
        });
    });

    const totalSteps = 6;
    let currentStep = 1;

    for (let i = 2; i <= totalSteps; i++) {
        let section = document.getElementById(`section${i}`);
        if (section) section.classList.add("hidden");
    }

    const goBackBtn = document.getElementById("goBackBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");
    const successMessage = document.getElementById("successMessage");
    const formSection = document.getElementById("section6"); 

    if (goBackBtn) goBackBtn.classList.add("hidden");
    if (submitBtn) submitBtn.classList.add("hidden");

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            let currentSection = document.getElementById(`section${currentStep}`);
            let nextSection = document.getElementById(`section${currentStep + 1}`);

            if (currentSection) currentSection.classList.add("hidden");
            if (nextSection) {
                nextSection.classList.remove("hidden");
                currentStep++;

                if (goBackBtn) goBackBtn.classList.remove("hidden");
                if (currentStep === totalSteps) {
                    if (nextBtn) nextBtn.classList.add("hidden");
                    if (submitBtn) submitBtn.classList.remove("hidden");
                }
            }
        });
    }

    if (goBackBtn) {
        goBackBtn.addEventListener("click", function () {
            let currentSection = document.getElementById(`section${currentStep}`);
            let prevSection = document.getElementById(`section${currentStep - 1}`);

            if (currentSection) currentSection.classList.add("hidden");
            if (prevSection) {
                prevSection.classList.remove("hidden");
                currentStep--;

                if (currentStep === 1) goBackBtn.classList.add("hidden");
                if (nextBtn) nextBtn.classList.remove("hidden");
                if (submitBtn) submitBtn.classList.add("hidden");
            }
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener("click", function (event) {
            event.preventDefault(); 


            if (goBackBtn) goBackBtn.classList.add("hidden");
            if (submitBtn) submitBtn.classList.add("hidden");


            if (formSection) formSection.classList.add("hidden");


            if (successMessage) {
                successMessage.style.display = "block"; 

                setTimeout(function () {
                    successMessage.style.display = "none";
                }, 3000);
            }
        });
    }


    const menuToggle = document.getElementById("menu-toggle");
    const navbarNav = document.querySelector(".navbar-nav .nav-links");

    function checkWindowSize() {
        const isMobile = window.innerWidth <= 768; 
        if (isMobile) {
            navbarNav.classList.remove("active"); 
        } else {
            navbarNav.classList.add("active"); 
        }
    }

    checkWindowSize();
  
    if (menuToggle && navbarNav) {
        menuToggle.addEventListener("click", function () {
            navbarNav.classList.toggle("active");  
        });
    }

    window.addEventListener("resize", function () {
        checkWindowSize();
    });

   
    let slideIndex = 0;
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    const nextSlideBtn = document.getElementById("nextSlideBtn");
    const prevSlideBtn = document.getElementById("prevSlideBtn");

    function updateSlide() {
        if (slides) slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlide();
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    }

    if (slides) {
        setInterval(nextSlide, 3000);
        if (nextSlideBtn) nextSlideBtn.addEventListener("click", nextSlide);
        if (prevSlideBtn) prevSlideBtn.addEventListener("click", prevSlide);
    }
});
