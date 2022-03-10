import { Link } from "react-router-dom";

function InvoiceItem({ invoice }) {
  return (
    <div className="ticket">
      <div>{new Date(invoice.createdAt).toLocaleString("en-gb")}</div>
      <div>{invoice.itemName}</div>
      <div>{invoice.status}</div>
      <Link to={`/invoices/${invoice._id}`} className="btn btn-reverse btn-sm">
        View
      </Link>
    </div>
  );
}

export default InvoiceItem;
