import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInvoice, reset, updateInvoice } from "../features/invoices/invoiceSlice";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";
import { FaTicketAlt } from "react-icons/fa";

function Invoice() {
  const { invoice, isLoading, isSuccess, isError, message } = useSelector((state) => state.invoice);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { invoiceId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getInvoice(invoiceId));
    // eslint-disable-next-line
  }, [isError, message, invoiceId]);

  // Invoice Paid
  const onInvoicePaid = () => {
    dispatch(updateInvoice(invoiceId));
    toast.success("Invoice Paid");
    navigate("/invoices");
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error</h3>;
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/invoices" />
      </header>
      <div className="invoice-info-wrapper">
        <div className="invoice-info-item-one">
          <span>
            <strong>Invoice Date:</strong> {new Date(invoice.createdAt).toLocaleString("en-gb")}
          </span>
          <span>
            <strong>Invoice ID:</strong> #{invoice._id}
          </span>
          <span>
            <strong>Status:</strong> {invoice.status}
          </span>
        </div>
        <div className="invoice-info-item-two">
          {invoice.status !== "pending" && (
            <button onClick={onInvoicePaid} className="btn btn-block btn-danger">
              Mark As Paid
            </button>
          )}
        </div>
      </div>
      <div className="invoice-address-wrapper">
        <div className="user-address">
          <p>{invoice.userAddress}</p>
          <p>{invoice.userCity}</p>
          <p>{invoice.userPostCode}</p>
          <p>{invoice.userCountry}</p>
        </div>
        <div className="billing-address">
          <h3>Bill To:</h3>
          <p>{invoice.clientName}</p>
          <p>{invoice.clientAddress}</p>
          <p>{invoice.clientCity}</p>
          <p>{invoice.clientPostCode}</p>
          <p>{invoice.clientCountry}</p>
        </div>
        <div>
          <h3>Sent To:</h3>
          <p>{invoice.clientEmail}</p>
        </div>
      </div>
      <div className="ticket-desc">
        <div className="ticket-desc-wrapper-one">
          <div className="ticket-desc-item">
            <h3>Item Name:</h3>
            <p>{invoice.itemName}</p>
          </div>
          <div className="ticket-desc-item">
            <h3>Description:</h3>
            <p>{invoice.description}</p>
          </div>
        </div>
        <div className="ticket-desc-wrapper-two">
          <div className="ticket-desc-item">
            <h3>Quantity:</h3>
            <p>{invoice.quantity}</p>
          </div>
          <div className="ticket-desc-item">
            <h3>Payment Terms:</h3>
            <p>{invoice.paymentTerms}</p>
          </div>
          <div className="ticket-desc-item">
            <h3>Total:</h3>
            <p>£{invoice.price}</p>
          </div>
        </div>
      </div>
      <div className="height"></div>
    </div>
  );
}

export default Invoice;
