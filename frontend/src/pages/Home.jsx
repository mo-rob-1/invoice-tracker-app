import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Track Your Invoices</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to="/new-invoice" className="btn btn-reverse btn-block" data-testid="new-invoice-link">
        Create New Invoice
      </Link>

      <Link to="/invoices" className="btn  btn-block" data-testid="view-invoices-link">
        View My Invoices
      </Link>
    </>
  );
}

export default Home;
