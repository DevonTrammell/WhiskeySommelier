// slideshow.js

const slides = Array.from(document.querySelectorAll('.slide'));

let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function populateSlidesWithEventData(events) {
    events.forEach((event, index) => {
        const slide = slides[index];
        slide.innerHTML = `
      <h3>${event.eventTitle}</h3>
      <p>${event.eventDate}</p>
      <p>${event.eventTime}</p>
      <p>${event.eventURL}</P>
    `;
    });
}

// Fetch event data from the JSON file
fetch('events.json')
    .then(response => response.json())
    .then(events => {
        populateSlidesWithEventData(events);
    })
    .catch(error => {
        console.error('Error fetching event data:', error);
    });

// Call nextSlide() function periodically to rotate the slides
setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
