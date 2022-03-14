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
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userPostCode, setUserPostCode] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [paymentTerms, setPaymentTerms] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientPostCode, setClientPostCode] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [price, setPrice] = useState(0);

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
    dispatch(
      createInvoice({
        itemName,
        description,
        invoiceDate,
        clientCity,
        quantity,
        userAddress,
        userCity,
        userPostCode,
        userCountry,
        clientName,
        clientEmail,
        clientAddress,
        clientPostCode,
        clientCountry,
        price,
        paymentTerms,
      })
    );
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
          <h3>Bill From</h3>
          <div className="form-group">
            <label htmlFor="userAddress">Street Address</label>
            <input
              name="userAddress"
              id="userAddress"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userCity">City</label>
            <input name="userCity" id="userCity" value={userCity} onChange={(e) => setUserCity(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="userPostCode">Post Code</label>
            <input
              name="userPostCode"
              id="userPostCode"
              value={userPostCode}
              onChange={(e) => setUserPostCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userCountry">Country</label>
            <input
              name="userCountry"
              id="userCountry"
              value={userCountry}
              onChange={(e) => setUserCountry(e.target.value)}
            />
          </div>
          <h3>Bill To</h3>
          <div className="form-group">
            <label htmlFor="clientName">Client's Name</label>
            <input
              name="clientName"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientEmail">Client's Email</label>
            <input
              name="clientEmail"
              id="clientEmail"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientAddress">Street Address</label>
            <input
              name="clientAddress"
              id="clientAddress"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientCity">City</label>
            <input
              name="clientCity"
              id="clientCity"
              value={clientCity}
              onChange={(e) => setClientCity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientPostCode">Post Code</label>
            <input
              name="clientPostCode"
              id="clientPostCode"
              value={clientPostCode}
              onChange={(e) => setClientPostCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientCountry">Country</label>
            <input
              name="clientCountry"
              id="clientCountry"
              value={clientCountry}
              onChange={(e) => setClientCountry(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input
              type={"date"}
              name="invoiceDate"
              id="invoiceDate"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentTerms">Payment Terms</label>
            <select
              name="paymentTerms"
              id="paymentTerms"
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value)}
            >
              <option value="Net 1 Day">Net 1 Day</option>
              <option value="Net 7 Days">Net 7 Days</option>
              <option value="Net 14 Days">Net 14 Days</option>
              <option value="Net 30 Days">Net 30 Days</option>
            </select>
          </div>
          <h3>Invoice Summary</h3>
          <div className="form-group">
            <label htmlFor="itemName">Item Name</label>
            <input name="itemName" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} />
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
            <label htmlFor="quantity">Quantity</label>
            <input
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              step="1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
          <div className="height"></div>
        </form>
      </section>
    </>
  );
}

export default NewInvoice;
