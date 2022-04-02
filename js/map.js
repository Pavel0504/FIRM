function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "b3a48d526631c4dc",
    center: { lat: 55.754832617985755, lng: 37.59918805605066 },
    zoom: 12,
  });

  marker = new google.maps.Marker({
    position: { lat: 55.754832617985755, lng: 37.59918805605066 },
    map: map,
    animation: google.maps.Animation.BOUNCE,
  });

  google.maps.event.addListener(infowindow, "closeclick", function () {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });

  marker.addListener("click", function () {
    marker.setAnimation(null);
  });

  image = '/assets/main/map/icon.svg',
    marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
});
}
