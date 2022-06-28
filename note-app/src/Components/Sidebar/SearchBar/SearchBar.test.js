import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar/SearchBar";

test("ClearList", function () {
  const searchTopic = jest.fn();
  const buttonText = "";
  render(<SearchBar searchTopic={getAllTopics} buttonText={buttonText} />);
  const clearListButton = screen.getByRole("button");
  expect(clearListButton).toBeInTheDocument();
});
