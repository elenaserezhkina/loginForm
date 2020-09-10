import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./components/LoginForm";

test("renders the form header", () => {
  const { getByText } = render(<LoginForm />);
  const header = getByText(/Management Center/i);
  expect(header).toBeInTheDocument();
});
test("renders button with className loginButton", () => {
  const { getByText } = render(<LoginForm />);
  const button = getByText(/LOGIN/i);
  expect(button).toHaveClass("loginButton");
});
test("has a form with values Username and Password", () => {
  const { getByTestId } = render(<LoginForm />);
  expect(getByTestId("login-form")).toHaveFormValues({
    Username: "",
    Password: "",
  });
});
