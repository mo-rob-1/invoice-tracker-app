import { render, waitForDomChange } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import Invoice from "../pages/Invoice";

describe("Invoice", () => {
  it("renders the invoice page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <Invoice />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
