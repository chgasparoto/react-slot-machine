import React from 'react'
import {
  render,
  cleanup,
} from 'react-testing-library'
import 'jest-dom/extend-expect'

import Sound from './Sound'
import win from '../assets/audio/win.wav'

afterEach(cleanup)

test('should render correctly', () => {
  const { asFragment } = render(<Sound audio={win} />)
  expect(asFragment()).toMatchSnapshot()
})
