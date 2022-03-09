const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Invoice = require("../models/invoiceModel");

// @desc  Get user invoices
// @route  GET /api/invoices
// @access  Private
const getInvoices = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get invoices" });
});

// @desc  Create a new invoice
// @route  POST /api/invoices
// @access  Private
const createInvoice = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Create invoice" });
});

module.exports = {
  getInvoices,
  createInvoice,
};
