const technologies = [
    {
        name: "Unity",
        logo: "media/Logos/unity.png",
        description: "Unity is the software im most comftible with having made over 20 game jam games in it"
    },
    {
        name: "C#",
        logo: "media/Logos/csharp.png",
        description: "Primary programming language for Unity development, apart from unity i havent used it for anything else"
    },
    {
        name: "Python",
        logo: "media/Logos/python.png",
        description: "I Leart this language when i was in high school and have using it to make differnt software and backends for sites"
    },
    {
        name: "Flask",
        logo: "media/Logos/flask.png",
        description: "Python web framework for building backend services for websites"
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
        logo: "media/Logos/js.png",
        description: "Dynamic programming language for creating interactive web experiences and real-time functionality."
    },
    {
        name: "Blender",
        logo: "media/Logos/blender.png",
        description: "A 3D modeling softwere ive used to make models for games and other projects"
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
