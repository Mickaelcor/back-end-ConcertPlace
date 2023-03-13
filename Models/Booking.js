const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    // Ref:'Place' afin de chercher la réference du concert dans le model 'Place'
    place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    price: Number,
    numberOfGuests: { type: Number, required: true },
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;