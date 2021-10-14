//TODO: CREATED REQUESTED BOOKING WHEN UPGRADING MODELS
const { model, Schema } = require("mongoose");

const bookingSchema = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: "events",
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    startDate: {
      type: Date,
      required: "Start date is required.",
    },
    endDate: {
      type: Date,
      required: "End date is required.",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("bookings", bookingSchema);
