/* =====================================================
   MARYAM SAFI - PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   1. DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");


    if (darkModeEnabled) {

        themeIcon.classList.remove(
            "bi-moon-fill"
        );

        themeIcon.classList.add(
            "bi-sun-fill"
        );

    } else {

        themeIcon.classList.remove(
            "bi-sun-fill"
        );

        themeIcon.classList.add(
            "bi-moon-fill"
        );

    }

});



/* =====================================================
   2. PROJECT FILTERING
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectItems =
    document.querySelectorAll(".project-item");

const noProjects =
    document.getElementById("noProjects");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedCategory =
            button.getAttribute("data-filter");


        let visibleProjects = 0;


        projectItems.forEach((project) => {

            const projectCategory =
                project.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {

                project.classList.remove("hidden");

                visibleProjects++;

            } else {

                project.classList.add("hidden");

            }

        });


        if (visibleProjects === 0) {

            noProjects.style.display =
                "block";

        } else {

            noProjects.style.display =
                "none";

        }

    });

});



/* =====================================================
   3. CERTIFICATION FILTERING
===================================================== */

const certificateFilters =
    document.querySelectorAll(
        ".certificate-filter"
    );


const certificateItems =
    document.querySelectorAll(
        ".certificate-item"
    );


const noCertificates =
    document.getElementById(
        "noCertificates"
    );


certificateFilters.forEach((button) => {

    button.addEventListener("click", () => {

        certificateFilters.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedCategory =
            button.getAttribute(
                "data-cert-filter"
            );


        let visibleCertificates = 0;


        certificateItems.forEach((certificate) => {

            const certificateCategory =
                certificate.getAttribute(
                    "data-cert-category"
                );


            if (
                selectedCategory === "all" ||
                selectedCategory === certificateCategory
            ) {

                certificate.classList.remove(
                    "hidden"
                );

                visibleCertificates++;

            } else {

                certificate.classList.add(
                    "hidden"
                );

            }

        });


        if (visibleCertificates === 0) {

            noCertificates.style.display =
                "block";

        } else {

            noCertificates.style.display =
                "none";

        }

    });

});



/* =====================================================
   4. CONTACT FORM VALIDATION
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const nameInput =
    document.getElementById("name");


const emailInput =
    document.getElementById("email");


const subjectInput =
    document.getElementById("subject");


const messageInput =
    document.getElementById("message");


const successMessage =
    document.getElementById(
        "successMessage"
    );


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        clearErrors();


        successMessage.style.display =
            "none";


        let isValid = true;



        /* ---------- NAME ---------- */

        if (
            nameInput.value.trim() === ""
        ) {

            showError(
                "nameError",
                "Please enter your name."
            );

            isValid = false;

        } else if (
            nameInput.value.trim().length < 3
        ) {

            showError(
                "nameError",
                "Name must contain at least 3 characters."
            );

            isValid = false;

        }



        /* ---------- EMAIL ---------- */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            emailInput.value.trim() === ""
        ) {

            showError(
                "emailError",
                "Please enter your email."
            );

            isValid = false;

        } else if (
            !emailPattern.test(
                emailInput.value.trim()
            )
        ) {

            showError(
                "emailError",
                "Please enter a valid email address."
            );

            isValid = false;

        }



        /* ---------- SUBJECT ---------- */

        if (
            subjectInput.value.trim() === ""
        ) {

            showError(
                "subjectError",
                "Please enter a subject."
            );

            isValid = false;

        }



        /* ---------- MESSAGE ---------- */

        if (
            messageInput.value.trim() === ""
        ) {

            showError(
                "messageError",
                "Please enter your message."
            );

            isValid = false;

        } else if (
            messageInput.value.trim().length < 10
        ) {

            showError(
                "messageError",
                "Message must contain at least 10 characters."
            );

            isValid = false;

        }



        /* ---------- SUCCESS ---------- */

        if (isValid) {

            successMessage.textContent =
                "Your message has been validated successfully!";

            successMessage.style.display =
                "block";


            contactForm.reset();


            setTimeout(() => {

                successMessage.style.display =
                    "none";

            }, 5000);

        }

    }
);



/* =====================================================
   5. SHOW ERROR
===================================================== */

function showError(
    elementId,
    message
) {

    const element =
        document.getElementById(
            elementId
        );


    element.textContent =
        message;

}



/* =====================================================
   6. CLEAR ERRORS
===================================================== */

function clearErrors() {

    const errorMessages =
        document.querySelectorAll(
            ".error-message"
        );


    errorMessages.forEach(
        (error) => {

            error.textContent = "";

        }
    );

}



/* =====================================================
   7. ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll(
        "section, header"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 160;


                const sectionHeight =
                    section.clientHeight;


                if (
                    window.scrollY >=
                        sectionTop &&

                    window.scrollY <
                        sectionTop +
                        sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =====================================================
   8. CLOSE MOBILE NAVBAR
===================================================== */

const navbarLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );


const navbarCollapse =
    document.getElementById(
        "navbarNav"
    );


navbarLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (window.innerWidth < 992) {

                const bootstrapCollapse =
                    bootstrap.Collapse.getInstance(
                        navbarCollapse
                    );


                if (bootstrapCollapse) {

                    bootstrapCollapse.hide();

                }

            }

        }
    );

});



/* =====================================================
   9. BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   10. PROJECT DATA
   ARRAY + OBJECTS
===================================================== */

const projects = [

    {
        name: "TravelMate",

        category:
            "Mini Project",

        domain:
            "Hospitality and Tourism"
    },


    {
        name:
            "Crop Yield Prediction",

        category:
            "Data Mining & Machine Learning",

        domain:
            "Agriculture"
    },


    {
        name:
            "Airline Crew Scheduling",

        category:
            "Case Study",

        domain:
            "Optimization"
    }

];



/* =====================================================
   11. CERTIFICATION DATA
   ARRAY + OBJECTS
===================================================== */

const certifications = [

    {
        name:
            "CS403: Introduction to Modern Database Systems",

        provider:
            "Saylor Academy",

        category:
            "Database"
    },


    {
        name:
            "CS401: Operating Systems",

        provider:
            "Saylor Academy",

        category:
            "Operating Systems"
    },


    {
        name:
            "CS402: Computer Communications and Networks",

        provider:
            "Saylor Academy",

        category:
            "Networking"
    },


    {
        name:
            "CS406: Information Security",

        provider:
            "Saylor Academy",

        category:
            "Security"
    },


    {
        name:
            "Python Programming: Beyond Basics to Applications",

        provider:
            "Udemy",

        category:
            "Python"
    },


    {
        name:
            "Machine Learning with Python",

        provider:
            "IBM / Cognitive Class",

        category:
            "Machine Learning"
    },


    {
        name:
            "Learning Microsoft 365 Copilot for Work",

        provider:
            "LinkedIn Learning",

        category:
            "AI"
    },


    {
        name:
            "Everyday AI Concepts",

        provider:
            "LinkedIn Learning",

        category:
            "AI"
    },


    {
        name:
            "Ethics in the Age of Generative AI",

        provider:
            "LinkedIn Learning",

        category:
            "Responsible AI"
    },


    {
        name:
            "Career Essentials in Generative AI",

        provider:
            "Microsoft & LinkedIn",

        category:
            "Generative AI"
    }

];



/* =====================================================
   12. DISPLAY DATA IN CONSOLE
===================================================== */

console.log(
    "Maryam Safi Portfolio"
);


console.log(
    "Projects:"
);


projects.forEach(
    (project, index) => {

        console.log(
            `${index + 1}. ${project.name} - ${project.category}`
        );

    }
);


console.log(
    "Certification records:"
);


certifications.forEach(
    (certificate, index) => {

        console.log(
            `${index + 1}. ${certificate.name} - ${certificate.provider}`
        );

    }
);



/* =====================================================
   13. PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "Portfolio loaded successfully."
        );

    }
);