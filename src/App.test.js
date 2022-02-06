import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Header", () => {
  test.each([{ name: /how it works/i }, { name: /about/i }])(
    "How it works and About links point to the correct page",
    (name) => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      const link = screen.getByRole("link", name);

      userEvent.click(link);

      expect(screen.getByRole("heading", name)).toBeInTheDocument();
    }
  );

  test("logo points to homepage", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /logo/i });

    userEvent.click(link);

    expect(
      screen.getByRole("heading", { name: /no reactions/i })
    ).toBeInTheDocument();
  });
});
