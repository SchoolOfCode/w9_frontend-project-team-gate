import React from 'react'
import { render, screen } from '@testing-library/react'
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
