// Replace this with an actual map API key and integration code
const MAP_API_KEY = 'pk.eyJ1IjoicHJpc2NpbGFkZXYiLCJhIjoiY2w1c25jYWRvMGtvOTNpbW82aHgyZWw2cCJ9.KROqeMBkBUiYW4oOY4RHag';

// Sample daycare locations in Nairobi, Kenya (latitude, longitude)
const daycareLocations = [
    { lat: -1.2921, lng: 36.8219 }, // Nairobi CBD
    { lat: -1.2923, lng: 36.8217 }, // Another location
    // Add more locations here
];

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -1.2921, lng: 36.8219 }, // Centered in Nairobi
        zoom: 12,
    });

    // Add markers for daycare locations
    daycareLocations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map: map,
            title: 'Daycare Location',
        });
    });
}
