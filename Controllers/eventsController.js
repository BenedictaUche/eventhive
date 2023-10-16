const eventModel = require("../Model/eventModel");
const mongoose = require("mongoose");
const { cloudinary } = require("../Script/cloudinary");
// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await eventModel.find({});
    return res.status(200).json({
      status: "success",
      message: "All events retrieved",
      data: events,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

// Add a new event
const addEvent = async (req, res) => {
  try {
    const { eventName, category, location, dateTime } = JSON.parse(
      req.body.data
    );

    const errors = [];

    if (!eventName) {
      errors.push("Event Name is required.");
    }

    if (!category) {
      errors.push("Category is required.");
    }

    if (!location) {
      errors.push("Location is required.");
    }

    if (!dateTime) {
      errors.push("Date and Time is required.");
    }

    if (errors.length > 0) {
      return res
        .status(400)
        .json({ status: "error", message: "Validation failed", errors });
    }
    const parts = req.file.path.split("/");
    const publicId = parts[parts.length - 1].split(".")[0];

    const event = new eventModel({
      eventName,
      image: req.file.path,
      imagePublicId: publicId,
      category,
      location,
      dateTime,
    });
    const savedEvent = await event.save();
    return res
      .status(201)
      .json({ status: "success", message: "Event added", data: savedEvent });

    // Handle any errors during the upload
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    // Check if the event ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid event ID.",
      });
    }
    // Find the event by ID
    const event = await eventModel.findOne({ _id: eventId });
    if (!event) {
      return res.status(404).json({
        status: "error",
        message: "Event not found.",
      });
    }
    if (event.image) {
      // Delete the image from Cloudinary
      cloudinary.uploader.destroy(event.imagePublicId, (error, result) => {
        if (error) {
          console.error("Error deleting image from Cloudinary: ", error);
          return res.status(500).json({
            status: "error",
            message: "Failed to delete the event's image from Cloudinary.",
          });
        }
        // Image deleted successfully, now remove the event from the database
        deleteEventAndRespond(res, event);
      });
    } else {
      // No image associated with the event, simply remove it from the database
      deleteEventAndRespond(res, event);
    }
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

async function deleteEventAndRespond(res, event) {
  try {
    await eventModel.deleteOne({ _id: event._id });
    return res.status(200).json({
      status: "success",
      message:
        "Event deleted successfully" + (event.image ? " with image." : "."),
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to delete the event from the database: " + error.message,
    });
  }
}

// Edit an event
const editEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid event ID." });
    }
    // Check if at least one field has been provided
    console.log(req.body);

    if (Object.keys(req.body).length === 0 && !req.file) {
      return res.status(400).json({
        status: "error",
        message:
          "At least one field of data (eventName, category, location, dateTime, or an image) is required for the update.",
      });
    }
    const event = await eventModel.findOne({ _id: eventId });

    if (!event) {
      return res
        .status(404)
        .json({ status: "error", message: "The event does not exist" });
    }

    // Update event details if provided
    if (req.body.eventName) {
      event.eventName = req.body.eventName;
    }
    if (req.body.category) {
      event.category = req.body.category;
    }
    if (req.body.location) {
      event.location = req.body.location;
    }
    if (req.body.dateTime) {
      event.dateTime = req.body.dateTime;
    }

    // Check if an image file is provided in the request
    if (req.file) {
      const result = req.file.path;
      const parts = result.split("/");
      const publicId = parts[parts.length - 1].split(".")[0];
      event.image = result;
      event.imagePublicId = publicId;
    }

    await event.save();

    return res.status(200).json({
      status: "success",
      message: "Event updated successfully",
      data: event,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "An error occurred while editing the event",
    });
  }
};

module.exports = {
  getAllEvents,
  addEvent,
  deleteEvent,
  editEvent,
};
