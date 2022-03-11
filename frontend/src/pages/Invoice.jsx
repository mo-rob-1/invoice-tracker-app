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
        <h2>Invoice ID: {invoice._id}</h2>
        <span>{invoice.status}</span>
        <h3>Date Submitted: {new Date(invoice.createdAt).toLocaleString("en-gb")}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description</h3>
          <p>{invoice.description}</p>
        </div>
      </header>
      {invoice.status !== "pending" && (
        <button onClick={onInvoicePaid} className="btn btn-block btn-danger">
          Mark Invoice As Paid
        </button>
      )}
    </div>
  );
}

export default Invoice;
