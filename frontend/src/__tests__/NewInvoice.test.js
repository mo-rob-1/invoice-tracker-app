import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import NewInvoice from "../pages/NewInvoice";

describe("NewInvoice", () => {
  it("renders the new invoice page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the form", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Provider store={store} history={history}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );
    expect(getByTestId("invoice-form")).toBeInTheDocument();
  });

  it("renders the texts", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Provider store={store} history={history}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    expect(getByText("Create New Invoice")).toBeInTheDocument();
    expect(getByText("Bill From")).toBeInTheDocument();
    expect(getByText("Bill To")).toBeInTheDocument();
    expect(getByText("Invoice Summary")).toBeInTheDocument();
  });

  it("renders the seller's name input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("seller-name-label");
    expect(label).toBeTruthy();

    const input = getByTestId("seller-name-input");
    expect(input).toBeTruthy();
  });

  it("renders the seller's email address input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("seller-email-label");
    expect(label).toBeTruthy();

    const input = getByTestId("seller-email-input");
    expect(input).toBeTruthy();
  });

  it("renders the street address input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("street-address-label");
    expect(label).toBeTruthy();

    const input = getByTestId("street-address-input");
    expect(input).toBeTruthy();
  });

  it("renders the city input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("city-label");
    expect(label).toBeTruthy();

    const input = getByTestId("city-input");
    expect(input).toBeTruthy();
  });

  it("renders the post code input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("post-code-label");
    expect(label).toBeTruthy();

    const input = getByTestId("post-code-input");
    expect(input).toBeTruthy();
  });

  it("renders the user country input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("country-label");
    expect(label).toBeTruthy();

    const input = getByTestId("country-input");
    expect(input).toBeTruthy();
  });

  it("renders the client name input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("client-name-label");
    expect(label).toBeTruthy();

    const input = getByTestId("client-name-input");
    expect(input).toBeTruthy();
  });

  it("renders the client email address input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("client-email-label");
    expect(label).toBeTruthy();

    const input = getByTestId("client-email-input");
    expect(input).toBeTruthy();
  });

  it("renders the client street address input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("client-address-label");
    expect(label).toBeTruthy();

    const input = getByTestId("client-address-input");
    expect(input).toBeTruthy();
  });

  it("renders the client city input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("client-city-label");
    expect(label).toBeTruthy();

    const input = getByTestId("client-city-input");
    expect(input).toBeTruthy();
  });

  it("renders the client post code input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("client-post-code-label");
    expect(label).toBeTruthy();

    const input = getByTestId("client-post-code-input");
    expect(input).toBeTruthy();
  });

  it("renders the client country input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("client-country-label");
    expect(label).toBeTruthy();

    const input = getByTestId("client-country-input");
    expect(input).toBeTruthy();
  });

  it("renders the invoice date input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("invoice-date-label");
    expect(label).toBeTruthy();

    const input = getByTestId("invoice-date-input");
    expect(input).toBeTruthy();
  });

  it("renders the payment terms select and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("payment-terms-label");
    expect(label).toBeTruthy();

    const select = getByTestId("payment-terms-select");
    expect(select).toBeTruthy();
  });

  it("renders the item name label and input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("item-name-label");
    expect(label).toBeTruthy();

    const input = getByTestId("item-name-input");
    expect(input).toBeTruthy();
  });

  it("renders the item description label and textarea", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("description-label");
    expect(label).toBeTruthy();

    const textarea = getByTestId("description-textarea");
    expect(textarea).toBeTruthy();
  });

  it("renders the item quantity label and input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("quantity-label");
    expect(label).toBeTruthy();

    const input = getByTestId("quantity-input");
    expect(input).toBeTruthy();
  });

  it("renders the item price label and input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const label = getByTestId("price-label");
    expect(label).toBeTruthy();

    const input = getByTestId("price-input");
    expect(input).toBeTruthy();
  });

  it("renders the submit button", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Router>
          <NewInvoice />
        </Router>
      </Provider>
    );

    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
    getByRole("button", { name: /submit/i });
  });
});
