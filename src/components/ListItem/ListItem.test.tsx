import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { store } from "../../app/store";
import ListItem from "./ListItem";

const mockedUser = {
  name: "rick",
  nickname: "nickrick",
  phone: "123456789",
  email: "rick@mail.com",
  position: "Middle QA",
  photo: "1.jpg",
};

const Wrapper = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

describe("<ListItem /> renders", () => {
  it("renders without issues", () => {
    render(<ListItem user={mockedUser} />, { wrapper: Wrapper });
    const user = screen.getByText("rick");

    expect(user).toBeInTheDocument();
  });

  it("renders view button", () => {
    render(<ListItem user={mockedUser} />, { wrapper: Wrapper });
    const button = screen.getByRole("button", { name: "View" });

    expect(button).toBeInTheDocument();
  });
});
