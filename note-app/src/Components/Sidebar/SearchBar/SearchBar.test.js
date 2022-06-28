import React from 'react'
import { render, screen } from '@testing-library/react'
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
