import React from 'react'
import {
  render,
  cleanup,
  fireEvent
} from 'react-testing-library'
import 'jest-dom/extend-expect'

import SlotMachine from './SlotMachine'

afterEach(cleanup)

test('should play the game through the buttons', () => {
  const { getByText, getByTestId, getAllByTestId } = render(<SlotMachine />)

  const startButton = getByText(/start/i)
  const stopButton = getByText(/stop/i)
  const prize = getByTestId('prize')
  const wheels = getAllByTestId('wheel')

  fireEvent.click(startButton)
  expect(startButton).toBeDisabled()
  expect(stopButton).toBeEnabled()

  fireEvent.click(stopButton)
  expect(startButton).toBeEnabled()
  expect(stopButton).toBeDisabled()

  expect(wheels === getAllByTestId('wheel')).toBe(false)
  expect(prize).toHaveTextContent(/(win|lose)/i)
})
