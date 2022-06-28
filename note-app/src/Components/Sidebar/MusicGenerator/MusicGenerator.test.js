import React from 'react'
import { render, screen } from '@testing-library/react'
import MusicGenerator from "./MusicGenerator.js"

//Test not working
it('should test the MusicGenerator component', () => {
    render(<MusicGenerator/>)
   const music = screen.getElementByClassName("MusicGenerator");
   expect(music).toBeInTheDocument();
  })