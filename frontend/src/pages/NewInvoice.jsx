import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createInvoice, reset } from "../features/invoices/invoiceSlice";
import BackButton from "../components/BackButton";

function NewInvoice() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.invoices);

  const [name] = useState(user?.name);
  const [email] = useState(user?.email);
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
          <label htmlFor="name" data-testid="seller-name-label">
            Seller's Name
          </label>
          <input type="text" className="form-control" value={name} disabled data-testid="seller-name-input" />
        </div>

        <div className="form-group">
          <label htmlFor="email" data-testid="seller-email-label">
            Seller's Email
          </label>
          <input type="text" className="form-control" value={email} disabled data-testid="seller-email-input" />
        </div>

        <form onSubmit={onSubmit} data-testid="invoice-form">
          <h3>Bill From</h3>
          <div className="form-group">
            <label htmlFor="userAddress" data-testid="street-address-label">
              Street Address
            </label>
            <input
              name="userAddress"
              id="userAddress"
              data-testid="street-address-input"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userCity" data-testid="city-label">
              City
            </label>
            <input
              name="userCity"
              id="userCity"
              data-testid="city-input"
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPostCode" data-testid="post-code-label">
              Post Code
            </label>
            <input
              name="userPostCode"
              id="userPostCode"
              data-testid="post-code-input"
              value={userPostCode}
              onChange={(e) => setUserPostCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userCountry" data-testid="country-label">
              Country
            </label>
            <input
              name="userCountry"
              id="userCountry"
              data-testid="country-input"
              value={userCountry}
              onChange={(e) => setUserCountry(e.target.value)}
            />
          </div>
          <h3>Bill To</h3>
          <div className="form-group">
            <label htmlFor="clientName" data-testid="client-name-label">
              Client's Name
            </label>
            <input
              name="clientName"
              id="clientName"
              data-testid="client-name-input"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientEmail" data-testid="client-email-label">
              Client's Email
            </label>
            <input
              name="clientEmail"
              id="clientEmail"
              data-testid="client-email-input"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientAddress" data-testid="client-address-label">
              Street Address
            </label>
            <input
              name="clientAddress"
              id="clientAddress"
              data-testid="client-address-input"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientCity" data-testid="client-city-label">
              City
            </label>
            <input
              name="clientCity"
              id="clientCity"
              data-testid="client-city-input"
              value={clientCity}
              onChange={(e) => setClientCity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientPostCode" data-testid="client-post-code-label">
              Post Code
            </label>
            <input
              name="clientPostCode"
              id="clientPostCode"
              data-testid="client-post-code-input"
              value={clientPostCode}
              onChange={(e) => setClientPostCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientCountry" data-testid="client-country-label">
              Country
            </label>
            <input
              name="clientCountry"
              id="clientCountry"
              data-testid="client-country-input"
              value={clientCountry}
              onChange={(e) => setClientCountry(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceDate" data-testid="invoice-date-label">
              Invoice Date
            </label>
            <input
              type={"date"}
              name="invoiceDate"
              id="invoiceDate"
              data-testid="invoice-date-input"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentTerms" data-testid="payment-terms-label">
              Payment Terms
            </label>
            <select
              name="paymentTerms"
              id="paymentTerms"
              data-testid="payment-terms-select"
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
            <label htmlFor="itemName" data-testid="item-name-label">
              Item Name
            </label>
            <input
              name="itemName"
              id="itemName"
              data-testid="item-name-input"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" data-testid="description-label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              data-testid="description-textarea"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="quantity" data-testid="quantity-label">
              Quantity
            </label>
            <input
              name="quantity"
              id="quantity"
              data-testid="quantity-input"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              step="1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price" data-testid="price-label">
              Price
            </label>
            <input
              name="price"
              id="price"
              data-testid="price-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
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
