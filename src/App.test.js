import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Search from "./components/Search";
import mockResponse from "./__mocks__/subreddit-reactjs-response.json";

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe("Header", () => {
  test("button points to search site", () => {
    setup();

    const link = screen.getByRole("button", { name: /show me the best time/i });

    userEvent.click(link);
    screen.debug();

    expect(
      screen.getByRole("heading", {
        name: /find the best time for a subreddit/i,
      })
    ).toBeInTheDocument();
  });
});

describe("Subreddit Form", () => {
  test("loads posts and renders them on the page", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => mockResponse,
      })
    );

    render(<Search />);

    const subredditInput = screen.getByLabelText("r/");
    userEvent.clear(subredditInput);
    userEvent.type(subredditInput, "MarvelGifs");

    const submitButton = screen.getByRole("button", { name: /search/i });
    userEvent.click(submitButton);

    const loadingCircle = screen.getByTestId("loading-circle");
    expect(loadingCircle).toBeInTheDocument();

    const heatmap = await screen.findByText("12:00am");
    expect(fetch).toHaveBeenCalledWith(
      "https://www.reddit.com/r/MarvelGifs/top.json?t=all&limit=100&after="
    );
  });
});
