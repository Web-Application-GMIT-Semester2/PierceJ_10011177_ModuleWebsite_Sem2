function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

var elName = document.getElementById('hotel1'); // Get element
elName.textContent = quayHotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('hotel1');    // Get element
elRooms.textContent = elRooms.textContent + " rooms: " + quayHotel.checkAvailability();   // Update HTML with property of the object

var elName2 = document.getElementById('hotel2'); // Get element
elName2.textContent = parkHotel.name;                   // Update HTML with property of the object

var elRooms2 = document.getElementById('hotel2');    // Get element
elRooms2.textContent = elRooms2.textContent + " rooms: " + parkHotel.checkAvailability();   // Update HTML with property of the object
