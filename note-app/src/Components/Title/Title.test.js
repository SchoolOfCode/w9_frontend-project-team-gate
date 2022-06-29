import React from 'react'
import { render, screen} from '@testing-library/react'
import Title from './Title'

test ('The title should display on eash page', ()=>{
render(<Title/>)
const title = screen.getByText('Geta Note')
expect(title).toBeInTheDocument()


})