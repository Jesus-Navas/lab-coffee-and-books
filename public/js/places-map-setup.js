function initMap() {
  const map = new google.maps.Map(document.querySelector("#myMap"), {
    zoom: 16,
    center: { lat: 35.88988445745221, lng: -5.321297679832939 },
    styles: mapStyles.retro,
  });

  getPlaces(map);
}

function getPlaces(map) {
  axios
    .get("/api/places")
    .then((response) => printPlaces(response.data, map))
    .catch((err) => console.log(err));
}

function printPlaces(places, map) {
  places.forEach((elm) => {
    let position = {
      lat: elm.location.coordinates[0],
      lng: elm.location.coordinates[1],
    };

    new google.maps.Marker({ map, position, title: elm.name });
  });
}
