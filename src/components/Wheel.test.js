import React from 'react'
import {
  render,
  cleanup,
} from 'react-testing-library'
import 'jest-dom/extend-expect'

import Wheel from './Wheel'
import monkey from '../assets/img/monkey.png'

afterEach(cleanup)

test('should render correctly', () => {
  const { asFragment } = render(<Wheel image={monkey} />)
  expect(asFragment()).toMatchSnapshot()
})
