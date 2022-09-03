import { render, screen } from '@testing-library/react'
import Button from './Button'

it('should render correctly', () => {
  render(<Button label='Button' />)
  expect(screen.getByTestId('button')).not.toBeNull()
})

it('should render correctly label', () => {
  render(<Button label='Button' />)
  expect(screen.getByTestId('button').textContent).toBe('Button')
})
