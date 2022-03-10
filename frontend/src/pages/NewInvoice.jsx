import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createInvoice, reset } from "../features/invoices/invoiceSlice";
import BackButton from "../components/BackButton";

function NewInvoice() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.invoice);

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/invoices");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(itemName);
    dispatch(createInvoice({ itemName, description, invoiceDate, status }));
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <BackButton url="/" />
      <section className="heading">
        <h1>Create New Invoice</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Seller's Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>

        <div className="form-group">
          <label htmlFor="email">Seller's Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="itemName">Item Name</label>
            <input name="itemName" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input
              name="invoiceDate"
              id="invoiceDate"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceDate">Status</label>
            <input name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewInvoice;
