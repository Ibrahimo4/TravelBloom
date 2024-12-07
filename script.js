// script.js
document.getElementById("search-button").addEventListener("click", function () {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const destinations = [
      { name: "Paris", description: "The City of Light.", image: "paris.jpg" },
      { name: "Tokyo", description: "A bustling metropolis blending tradition and innovation.", image: "tokyo.jpg" },
      { name: "Bali", description: "A tropical paradise with stunning beaches and vibrant culture.", image: "bali.jpg" },
    ];
  
    const results = destinations.filter((dest) =>
      dest.name.toLowerCase().includes(query)
    );
  
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ""; // Clear previous results
  
    if (results.length > 0) {
      results.forEach((dest) => {
        const resultDiv = document.createElement("div");
        resultDiv.className = "destination-result";
        resultDiv.innerHTML = `
          <h3>${dest.name}</h3>
          <img src="${dest.image}" alt="${dest.name}" style="width:100%;max-width:300px;">
          <p>${dest.description}</p>
          <button onclick="alert('Booking ${dest.name}!')">Book Now</button>
        `;
        resultsContainer.appendChild(resultDiv);
      });
    } else {
      resultsContainer.innerHTML = "<p>No destinations found. Try another search.</p>";
    }
  });
  