const technologies = [
    {
        name: "Unity",
        logo: "media/Logos/unity.png",
        description: "Game development engine used for creating immersive 2D and 3D experiences with powerful physics and rendering capabilities."
    },
    {
        name: "C#",
        logo: "media/Logos/csharp.png",
        description: "Primary programming language for Unity development, offering robust object-oriented features and extensive libraries."
    },
    {
        name: "Python",
        logo: "media/Logos/python.png",
        description: "Versatile language used for tools, automation, and backend services with extensive AI and data processing capabilities."
    },
    {
        name: "Flask",
        logo: "media/Logos/flask.png",
        description: "Lightweight Python web framework for building fast and scalable backend services with minimal overhead."
    },
    {
        name: "HTML5",
        logo: "media/Logos/html.png",
        description: "Modern markup language for structuring web content with advanced features for multimedia and interactive elements."
    },
    {
        name: "CSS3",
        logo: "media/Logos/css.png",
        description: "Styling language for creating responsive and visually appealing web interfaces with modern animations and layouts."
    },
    {
        name: "JavaScript",
        logo: "media/Logos/JS.png",
        description: "Dynamic programming language for creating interactive web experiences and real-time functionality."
    },
    {
        name: "Blender",
        logo: "media/Logos/blender-svgrepo-com.png",
        description: "Open-source 3D creation suite for modelling, rigging, animation, and rendering game assets and visual effects."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const techGrid = document.querySelector('.tech-grid');
    
    function createTechBox(tech, index) {
        const techBox = document.createElement('div');
        techBox.className = 'tech-box';
        techBox.style.opacity = '0';
        techBox.style.transform = 'translateY(20px)';
        
        techBox.innerHTML = `
            <div class="tech-content">
                <div class="tech-logo">
                    <img src="${tech.logo}" alt="${tech.name}">
                </div>
                <div class="tech-info">
                    <h3>${tech.name}</h3>
                    <p>${tech.description}</p>
                </div>
            </div>
        `;
        
        return techBox;
    }

    function loadTechnologies() {
        techGrid.innerHTML = '';
        const techBoxes = [];
        
        technologies.forEach((tech, index) => {
            const techBox = createTechBox(tech, index);
            techGrid.appendChild(techBox);
            techBoxes.push(techBox);
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    techBoxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            box.style.opacity = '1';
                            box.style.transform = 'translateY(0)';
                        }, index * 150); // Stagger each card by 150ms
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(techGrid);
    }

    loadTechnologies();
});
