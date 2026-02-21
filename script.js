const weatherInfoDiv = document.getElementById('weather-info'); const locationInput = document.getElementById('location');
document.getElementById('location-form').addEventListener('submit', async (e) =>
{
e.preventDefault();
const location = locationInput.value;
// Make an AJAX request to the server with the location as a query parameter
const response = await
fetch(`/weather?location=${encodeURIComponent(location)}`); const weatherData = await response.json();
if (weatherData && !weatherData.error) {
// Display weather information 
weatherInfoDiv.innerHTML = `
<p>City: ${weatherData.city}</p>
<p>Temperature: ${weatherData.temperature}</p>
<p>Weather: ${weatherData.description}</p>
`;
} else {
// Display an error message
weatherInfoDiv.innerHTML = `<p>${weatherData.error || 'An error occurred.'}</p>`;
}
});