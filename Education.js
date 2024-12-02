document.addEventListener('DOMContentLoaded', function() {
    const educationData = [
        {
            title: 'Cert II in Game Development',
            institution: 'AIE',
            date: '2020 - 2021',
            description: 'Learned how to make games in Unreal Engine',
            side: 'left'
        },
        {
            title: 'Cert III in Information Technology',
            institution: 'TAFE',
            date: '2023-2024',
            description: 'Leant XAML, C#, python and JavaScript',
            side: 'right'
        },
        {
            title: 'Graduated Year 12',
            institution: 'ASMS',
            date: '2024',
            description: 'Completed Physics, Maths Methods and Digital Tech',
            side: 'left'
        }
    ];

    function createEducationTimeline() {
        const educationSection = document.getElementById('education');
        const timelineContainer = document.createElement('div');
        timelineContainer.className = 'timeline';

        educationData.forEach(education => {
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${education.side}`;

            const timelineContent = document.createElement('div');
            timelineContent.className = 'timeline-content';

            const titleElement = document.createElement('h3');
            titleElement.textContent = education.title;

            const institutionElement = document.createElement('p');
            institutionElement.textContent = education.institution;

            const dateElement = document.createElement('span');
            dateElement.className = 'timeline-date';
            dateElement.textContent = education.date;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = education.description;

            timelineContent.appendChild(titleElement);
            timelineContent.appendChild(institutionElement);
            timelineContent.appendChild(dateElement);
            timelineContent.appendChild(descriptionElement);

            timelineItem.appendChild(timelineContent);
            timelineContainer.appendChild(timelineItem);
        });

        // Clear existing content and append new timeline
        const existingTimeline = educationSection.querySelector('.timeline');
        if (existingTimeline) {
            existingTimeline.remove();
        }
        educationSection.appendChild(timelineContainer);
    }

    // Create timeline on page load
    createEducationTimeline();
});
