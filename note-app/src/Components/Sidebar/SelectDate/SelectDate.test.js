import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SelectDate from "./SelectDate.js"

it('should test the SelectDate component', () => {
    const getSearchedDate = jest.fn();
    const handleChangeDate = jest.fn();
    const date = jest.fn();
    render( <SelectDate
        handleChange={handleChangeDate}
        getDate={getSearchedDate}
        text={date}
      />)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  })

  test("should call closeRightSection callback", () => {
    const getByDate = jest.fn();
    const handleChangeDate = jest.fn();
    const date = "13-06-2022"
  
    render( <SelectDate
      handleChange={handleChangeDate}
      getDate={getByDate}
      text={date}
    />)
  
    fireEvent.click(screen.getByRole('button'));
  
    expect(getByDate).toHaveBeenCalled();
  });
