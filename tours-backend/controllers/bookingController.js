// controllers/bookingController.js

const Booking = require("../models/bookingModel");

const bookingController = {
  // Back-End: Modify getAllBookings function
  getAllBookings: (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    Booking.getAllPaginated(limit, offset, (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Failed to retrieve bookings." });
      }

      Booking.getTotalCount((countErr, countResults) => {
        if (countErr) {
          return res
            .status(500)
            .json({ error: "Failed to retrieve bookings count." });
        }

        const totalRecords = countResults[0].totalCount;
        res.status(200).json({
          totalRecords,
          totalPages: Math.ceil(totalRecords / limit),
          currentPage: page,
          data: results,
        });
      });
    });
  },
  getBookingById: (req, res) => {
    const { id } = req.params;
    Booking.getById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Failed to retrieve booking." });
      } else if (result.length === 0) {
        res.status(404).json({ error: "Booking not found." });
      } else {
        res.status(200).json(result[0]);
      }
    });
  },
  createBooking: (req, res) => {
    const newBooking = req.body;
    Booking.create(newBooking, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Failed to create booking." });
      } else {
        res.status(201).json({
          message: "Booking created successfully.",
          bookingId: result.insertId,
        });
      }
    });
  },
  updateBooking: (req, res) => {
    const { id } = req.params;
    const updatedBooking = req.body;
    Booking.update(id, updatedBooking, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Failed to update booking." });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: "Booking not found." });
      } else {
        res.status(200).json({ message: "Booking updated successfully." });
      }
    });
  },
  deleteBooking: (req, res) => {
    const { id } = req.params;
    Booking.delete(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Failed to delete booking." });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: "Booking not found." });
      } else {
        res.status(200).json({ message: "Booking deleted successfully." });
      }
    });
  },

  getTripCounts: (req, res) => {
    Booking.getTripCounts((err, results) => {
      if (err) {
        res.status(500).json({ error: "Failed to retrieve trip counts." });
      } else {
        const totalTrips =
          parseInt(results.closedTrips) +
          parseInt(results.todaysTrips) +
          parseInt(results.upcomingTrips);
        res.status(200).json({ ...results, totalTrips });
      }
    });
  },
};

module.exports = bookingController;
