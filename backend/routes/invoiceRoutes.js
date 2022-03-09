const express = require("express");
const router = express.Router();
const {
  getInvoices,
  getInvoice,
  createInvoice,
  deleteInvoice,
  updateInvoice,
} = require("../controllers/invoiceController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getInvoices).post(protect, createInvoice);

router.route("/:id").get(protect, getInvoice).delete(protect, deleteInvoice).put(protect, updateInvoice);

module.exports = router;
