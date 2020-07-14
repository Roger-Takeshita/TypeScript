import axios from 'axios';
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const googleAPIKey = 'your-google-api-key';
// declare var google: any;

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: 'OK' | 'ZERO_RESULTS';
};

console.log(googleAPIKey);
function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    console.log(googleAPIKey);
    axios
        .get<GoogleGeocodingResponse>(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
                enteredAddress
            )}&key=${googleAPIKey}`
        )
        .then((response) => {
            if (response.data.status !== 'OK') {
                throw new Error('Could not fetch location!');
            }
            const coordinates = response.data.results[0].geometry.location;
            const map = new google.maps.Map(document.getElementById('map')!, {
                center: coordinates,
                zoom: 16,
            });
            new google.maps.Marker({ position: coordinates, map: map });
        })
        .catch((error) => {
            console.log(error);
        });
}

form.addEventListener('submit', searchAddressHandler);
