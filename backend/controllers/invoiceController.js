const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Invoice = require("../models/invoiceModel");

// @desc  Get user invoices
// @route  GET /api/invoices
// @access  Private
const getInvoices = asyncHandler(async (req, res) => {
  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const invoices = await Invoice.find({ user: req.user.id });

  res.status(200).json(invoices);
});

// @desc  Get user invoice
// @route  GET /api/invoices/:id
// @access  Private
const getInvoice = asyncHandler(async (req, res) => {
  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(404);
    throw new Error("Invoice not found");
  }

  if (invoice.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  res.status(200).json(invoice);
});

// @desc  Create a new invoice
// @route  POST /api/invoices
// @access  Private
const createInvoice = asyncHandler(async (req, res) => {
  const { itemName, description, invoiceDate } = req.body;

  if (!itemName || !description || !invoiceDate) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const invoice = await Invoice.create({
    itemName,
    description,
    invoiceDate,
    user: req.user.id,
    status: "Pending",
  });

  res.status(201).json(invoice);
});

// @desc  Delete invoice
// @route  DELETE /api/invoices/:id
// @access  Private
const deleteInvoice = asyncHandler(async (req, res) => {
  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(404);
    throw new Error("Invoice not found");
  }

  if (invoice.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await invoice.remove();

  res.status(200).json({ success: true });
});

// @desc  Update invoice
// @route  PUT /api/invoices/:id
// @access  Private
const updateInvoice = asyncHandler(async (req, res) => {
  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(404);
    throw new Error("Invoice not found");
  }

  if (invoice.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updateInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updateInvoice);
});

module.exports = {
  getInvoices,
  getInvoice,
  createInvoice,
  deleteInvoice,
  updateInvoice,
};
