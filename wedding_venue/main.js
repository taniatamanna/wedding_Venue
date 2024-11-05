



function openTab(evt, tabName) {
  // Hide all tab content sections
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tab => tab.style.display = 'none');

  // Remove "active" class from all tab links
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => link.classList.remove('active'));

  // Show the selected tab's content by setting display to "block"
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
      selectedTab.style.display = "block";  // Ensure tab content displays
  }
  
  // Activate the clicked tab link
  if (evt && evt.currentTarget) {
      evt.currentTarget.classList.add("active");
  }

  // Call displayVenues only when "Venues" tab is opened
  if (tabName === 'venues') {
      displayVenues();
  }
}

// Venues data array
const venues = [
  {
      name: "Army Golf Club",
      description: "A beautiful location with modern amenities for hosting grand weddings.",
      price: "৳100000/event",
      image: "assets/venue-1.jpg"
  },
  {
      name: "Dhaka Ladies Club",
      description: "A sophisticated venue perfect for weddings and corporate events.",
      price: "৳92000/event",
      image: "assets/venue-2.jpg"
  },
  {
      name: "Fortune Square Convention",
      description: "Modern facilities and an unforgettable experience in the heart of Dhaka.",
      price: "৳80000/event",
      image: "assets/venue-3.jpg"
  },
  {
    name: "Aziz Manzil - Party Place and Banquet Hall",
    description: "Situated at Segunbagicha rests in the heart of Dhaka city. Built in 1958 the house has a wonderful spacious garden which is a perfect setting for outdoor parties and functions. The location of Aziz Manzil Party Place And Banquet Hall is significant for it stands at a point which is accessible to both the old part of the city and the new part. Access to this area is easy for people all around the city.",
    price: "৳50000/event",
    image: "assets/venue-4.jpg"
},
{
    name: "Samira Convention Hall",
    description: "Samira Convention Hall is a multipurpose luxurious convention hall with a goal to make your events unforgettable.",
    price: "৳72000/event",
    image: "assets/venue-5.jpg"
},
{
    name: "White Palace Convention Hall",
    description: "Sixty seated multi cuisine restaurant under same roof with space of 1.500 sq. ft. which is designed as interactive food station.",
    price: "৳60000/event",
    image: "assets/venue-6.jpg"
}
];

// Display Venues
// Function to open the booking modal
function openBookingForm(hallType) {
  // Set the hall type in the form based on the selected venue
  document.getElementById("hallType").value = hallType;

  // Display the modal
  document.getElementById("bookingModal").style.display = "flex";
}

// Function to close the booking modal
function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

// Function to handle form submission
function submitBooking(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const hallType = document.getElementById("hallType").value;
  const bookingDate = document.getElementById("bookingDate").value;
  const guests = document.getElementById("guests").value;

  // Perform your booking confirmation actions here (e.g., save data, send to server)

  alert(`Booking confirmed for ${name} on ${bookingDate}!`);
  
  // Close the modal after submission
  closeModal();

  // Optionally reset the form
  document.getElementById("bookingForm").reset();
}

// Sample displayVenues function for generating venue cards
function displayVenues() {
  const roomGrid = document.querySelector("#venues .room__grid");

  if (roomGrid) {
      roomGrid.innerHTML = ""; // Clear existing content

      venues.forEach(venue => {
          const venueCard = document.createElement("div");
          venueCard.classList.add("room__card");

          venueCard.innerHTML = `
              <div class="room__card__image">
                  <img src="${venue.image}" alt="${venue.name}" />
                  <div class="room__card__icons">
                      <span><i class="ri-heart-fill"></i></span>
                      <span><i class="ri-paint-fill"></i></span>
                      <span><i class="ri-shield-star-line"></i></span>
                  </div>
              </div>
              <div class="room__card__details">
                  <h4>${venue.name}</h4>
                  <p>${venue.description}</p>
                  <h5>Starting from <span>${venue.price}</span></h5>
                  <button class="btn" onclick="openBookingForm('${venue.name}')">Book Now</button>
              </div>
          `;

          roomGrid.appendChild(venueCard);
      });
  }
}

// Function to open the booking modal
function openBookingForm(hallType) {
  // Set the hall type in the form based on the selected venue
  document.getElementById("hallType").value = hallType;

  // Display the modal
  document.getElementById("bookingModal").style.display = "flex";
}

// Function to close the booking modal
function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

// Function to handle form submission
function submitBooking(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const hallType = document.getElementById("hallType").value;
  const bookingDate = document.getElementById("bookingDate").value;
  const guests = document.getElementById("guests").value;

  // Perform your booking confirmation actions here (e.g., save data, send to server)

  alert(`Booking confirmed for ${name} on ${bookingDate}!`);
  
  // Close the modal after submission
  closeModal();

  // Optionally reset the form
  document.getElementById("bookingForm").reset();
}

// Search Venues
function searchVenues() {
  const query = document.querySelector(".search-input").value;

  if (query.trim() === "") {
      alert("Please enter a search term.");
      return;
  }

  // Hide all other tabs
  document.querySelectorAll(".tab-content").forEach(tab => {
      tab.style.display = "none";
  });

  // Show search results tab
  document.getElementById("search").style.display = "block";

  // Display search results
  const searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.innerHTML = `<p>Displaying results for: "${query}"</p>`;
  
  // Add logic to filter venues based on the query
  const filteredVenues = venues.filter(venue => 
      venue.name.toLowerCase().includes(query.toLowerCase()) ||
      venue.description.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredVenues.length > 0) {
      filteredVenues.forEach(venue => {
          const result = document.createElement("div");
          result.classList.add("search-result-item");
          result.innerHTML = `
              <h4>${venue.name}</h4>
              <p>${venue.description}</p>
              <p>Price: ${venue.price}</p>
          `;
          searchResultsContainer.appendChild(result);
      });
  } else {
      searchResultsContainer.innerHTML += `<p>No venues found for "${query}"</p>`;
  }
}

// Menu toggle functionality
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll reveal settings
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container p", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1500 });

