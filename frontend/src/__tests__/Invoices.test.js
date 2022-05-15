import { render, waitForDomChange } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import Invoices from "../pages/Invoices";

describe("Invoices", () => {
  it("renders the invoices page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <Invoices />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders the page title", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Provider store={store} history={history}>
        <Router>
          <Invoices />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      expect(getByText("Invoices")).toBeInTheDocument();
    });
  });

  it("renders the sub heading titles", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Provider store={store} history={history}>
        <Router>
          <Invoices />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      expect(getByText("Date")).toBeInTheDocument();
      expect(getByText("Item Name")).toBeInTheDocument();
      expect(getByText("Status")).toBeInTheDocument();
      expect(getByText("Invoice Details")).toBeInTheDocument();
    });
  });
});
