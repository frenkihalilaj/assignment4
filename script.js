// Initialize the map with Tiranë coordinates
const map = L.map('map').setView([41.329697, 19.818166], 14);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker to the map
const marker = L.marker([41.329697, 19.818166]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Pastrim Kimik Tirana</b><br>Shërbime të pastrimit cilësor.").openPopup();
