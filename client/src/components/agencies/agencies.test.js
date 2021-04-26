import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";
import userEvent from "@testing-library/user-event";
import Agencies from ".";
import theme from "../../theme";
import "@testing-library/jest-dom/extend-expect";

const agencies = [
  {
    id: "225b75df-8e56-46dd-8fa2-693ab7c48f31",
    name: "Agency Elec 1",
    manager: "Mr white",
    activity: "Électrique",
  },
  {
    id: "225b75df-8e56-46dd-8fa2-693ab7c491",
    name: "Bruni",
    manager: "Mr white",
    activity: "Électrique",
  },
];

describe("Agencies", () => {
  it("should render default content", () => {
    render(
      <ThemeProvider theme={theme}>
        <Agencies agencies={agencies} />
      </ThemeProvider>
    );

    expect(
      screen.getByRole("combobox", { name: "Agency" })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("option")).toHaveLength(3);
    agencies.forEach((agency) =>
      expect(
        screen.getByRole("option", { name: agency.name })
      ).toBeInTheDocument()
    );
  });

  it("should render agency details on agency select", () => {
    render(
      <ThemeProvider theme={theme}>
        <Agencies agencies={agencies} />
      </ThemeProvider>
    );
    const select = screen.getByRole("combobox", { name: "Agency" });
    userEvent.selectOptions(select, ["225b75df-8e56-46dd-8fa2-693ab7c491"]);
    expect(select).toHaveValue("225b75df-8e56-46dd-8fa2-693ab7c491");
    expect(screen.getByText("Manager: Mr white")).toBeVisible();
    expect(screen.getByText("Activité: Électrique")).toBeVisible();
  });
});
