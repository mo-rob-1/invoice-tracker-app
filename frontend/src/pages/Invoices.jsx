import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices, reset } from "../features/invoices/invoiceSlice";
import BackButton from "../components/BackButton";
import InvoiceItem from "../components/InvoiceItem";

function Invoices() {
  const { invoices, isLoading, isSuccess } = useSelector((state) => state.invoice);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [isSuccess, dispatch]);

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <BackButton url="/" />
      <h1>Invoices</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Item Name</div>
          <div>Status</div>
          <div></div>
        </div>
        {invoices.map((invoice) => (
          <InvoiceItem key={invoice._id} invoice={invoice} />
        ))}
      </div>
    </>
  );
}

export default Invoices;
