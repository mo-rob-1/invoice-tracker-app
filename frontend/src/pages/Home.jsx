import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Track your Invoices</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to="/new-invoice" className="btn btn-reverse btn-block">
        Create New Invoice
      </Link>

      <Link to="/invoices" className="btn  btn-block">
        View My Invoices
      </Link>
    </>
  );
}

export default Home;
