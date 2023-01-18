import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";

import { store } from "../../app/store";
import UsersList from "./UsersList";

const Wrapper = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

describe("<ListItem /> renders", () => {
  it("renders View All button initially", () => {
    render(<UsersList />, { wrapper: Wrapper });

    const viewAllButton = screen.getByText("View All");

    expect(viewAllButton).toBeInTheDocument();
  });

  it("renders only first 3 users initially", () => {
    render(<UsersList />, { wrapper: Wrapper });

    expect(screen.getByText("Geordan Aaryn")).toBeInTheDocument();
    expect(screen.getByText("Brazil Izair")).toBeInTheDocument();
    expect(screen.getByText("Selman Winston")).toBeInTheDocument();
  });

  it("does not render View All button after clicking on it", () => {
    render(<UsersList />, { wrapper: Wrapper });

    const viewAllButton = screen.getByText("View All");

    fireEvent.click(viewAllButton);
    expect(viewAllButton).not.toBeInTheDocument();
  });

  it("renders full user list after clicking on button", () => {
    render(<UsersList />, { wrapper: Wrapper });

    const viewAllButton = screen.getByText("View All");
    fireEvent.click(viewAllButton);

    expect(screen.getByText("Berenger Altay")).toBeInTheDocument();
  });
});
