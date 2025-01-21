import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import { render } from "@testing-library/react";
import store from "./store";

describe("app render conrrectly", () => {
  it("moises's portfolio", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText(/junior web developer/i)).toBeInTheDocument();
  });
});
