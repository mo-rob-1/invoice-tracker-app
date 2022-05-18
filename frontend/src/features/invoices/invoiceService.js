import axios from "axios";

const API_URL = "/api/invoices/";

// Create new invoice
const createInvoice = async (invoiceData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, invoiceData, config);

  return response.data;
};

// Get user invoices
const getInvoices = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get user invoice
const getInvoice = async (invoiceId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + invoiceId, config);

  return response.data;
};

// Update Invoice status
const updateInvoice = async (invoiceId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + invoiceId, { status: "Paid" }, config);

  return response.data;
};

const invoiceService = {
  createInvoice,
  getInvoices,
  getInvoice,
  updateInvoice,
};

export default invoiceService;
