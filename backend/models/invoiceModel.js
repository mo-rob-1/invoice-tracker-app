const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    userAddress: {
      type: String,
      // required: [true, "Street address is required"],
    },
    userCity: {
      type: String,
      // required: [true, "City is required"],
    },
    userPostCode: {
      type: String,
      // required: [true, "Post Code is required"],
    },
    userCountry: {
      type: String,
      // required: [true, "Country is required"],
    },
    clientName: {
      type: String,
      // required: [true, "Client's name is required"],
    },
    clientEmail: {
      type: String,
      // required: [true, "Client's email is required"],
    },
    clientAddress: {
      type: String,
      // required: [true, "Client's street address is required"],
    },
    clientCity: {
      type: String,
      // required: [true, "Client's city is required"],
    },
    clientPostCode: {
      type: String,
      // required: [true, "Client's post code is required"],
    },
    clientCountry: {
      type: String,
      // required: [true, "Client's country is required"],
    },
    invoiceDate: {
      type: Date,
      // required: [true, "Invoice date is required"],
    },
    paymentTerms: {
      type: String,
      // required: [true, "Payment terms is required"],
      enum: ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"],
    },
    description: {
      type: String,
      // required: [true, "Description is required"],
    },
    itemName: {
      type: String,
      // required: [true, "Item name is required"],
    },
    quantity: {
      type: Number,
      // required: [true, "Quantity is required"],
    },
    price: {
      type: Number,
      // required: [true, "Price is required"],
    },
    status: {
      type: String,
      // required: [true, "Status is required"],
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
