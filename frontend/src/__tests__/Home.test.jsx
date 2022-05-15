import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";

test("renders home page", () => {
  const history = createMemoryHistory();
  const { asFragment } = render(
    <Provider store={store} history={history}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();

  expect(screen.getByText("Track Your Invoices")).toBeInTheDocument();
  expect(screen.getByText("Please choose from an option below")).toBeInTheDocument();
});

it("renders the 'create new invoice' link", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );

  const link = getByTestId("new-invoice-link");
  expect(link).toBeTruthy();
});

it("renders the 'view my invoices' link", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );

  const link = getByTestId("view-invoices-link");
  expect(link).toBeTruthy();
});
