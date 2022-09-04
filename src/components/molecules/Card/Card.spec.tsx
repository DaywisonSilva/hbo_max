import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

describe('<Card/>', () => {
  it('should render correclty', () => {
    const { container } = render(<Card src='./test.jpg' alt='test' />)
    expect(container.firstChild).not.toBeNull()
  })

  it('function should been called', async () => {
    const mock = vi.fn()
    render(<Card src='./test.jpg' alt='test' onClick={mock} />)
    const card = screen.getByTestId('card')
    await userEvent.click(card)
    expect(mock).toHaveBeenCalled()
  })
})
