import axios from "axios";

const API_URL = "/api/invoices/";

// Create a new ticket
const createInvoice = async (invoiceData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, invoiceData, config);

  return response.data;
};

// Fetch invoices from database
const getInvoices = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Fetch invoice from database
const getInvoice = async (invoiceId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + invoiceId, config);

  return response.data;
};

const invoiceService = {
  createInvoice,
  getInvoices,
  getInvoice,
};

export default invoiceService;
