import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from "./SearchBar.js"


it('should test the SearchBar component', () => {
    const getSearchedTopics = jest.fn();
    const handleChangeTopic = jest.fn();
    const text = "";
    render(   <SearchBar
      handleChange={handleChangeTopic}
      getAllTopics={getSearchedTopics}
      text={text}
    />)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  })



test("should call closeRightSection callback", () => {
  const getAllTopics = jest.fn();
  const handleChangeTopic = jest.fn();

  render(<SearchBar
    handleChange={handleChangeTopic}
    getAllTopics={getAllTopics}
  />)

  fireEvent.click(screen.getByRole('button'));

  expect(getAllTopics).toHaveBeenCalled();
});
