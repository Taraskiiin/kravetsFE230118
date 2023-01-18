import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";

import { store } from "../../app/store";
import User from "./User";

const mockUser = {
  phone: "12345678",
  name: "mock user",
  nickname: "@mock",
  email: "mock@user.com",
  position: "Test test test",
  photo: "test.jpg",
};

const Wrapper = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

describe("<ListItem /> renders", () => {
  it("renders user card without issues", () => {
    render(<User user={mockUser} />, { wrapper: Wrapper });

    const viewAllButton = screen.getByText("mock user");

    expect(viewAllButton).toBeInTheDocument();
  });

  it("renders image with users photo", () => {
    render(<User user={mockUser} />, { wrapper: Wrapper });

    const image = screen.getByAltText("user photo");

    expect(image).toBeInTheDocument();
  });

  it("renders close button with close icon", () => {
    render(<User user={mockUser} />, { wrapper: Wrapper });

    const closeIcon = screen.getByAltText("close icon");

    expect(closeIcon).toBeInTheDocument();
  });

  it("renders Send message button", () => {
    render(<User user={mockUser} />, { wrapper: Wrapper });

    const sendMessageButton = screen.getByText("Send message");

    expect(sendMessageButton).toBeInTheDocument();
  });
});
