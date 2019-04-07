import React from 'react'
import {
  render,
  cleanup,
} from 'react-testing-library'
import 'jest-dom/extend-expect'

import Spinner from './Spinner'

afterEach(cleanup)

test('should render all the wheels correctly', () => {
  const stopHandler = jest.fn()
  const { getAllByTestId } = render(<Spinner spin={false} onStop={stopHandler} />)
  const wheels = getAllByTestId('wheel')

  wheels.map(w => expect(w instanceof HTMLImageElement).toBe(true))

})
