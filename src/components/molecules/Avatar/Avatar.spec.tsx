import { render, screen } from '@testing-library/react'
import Avatar from './Avatar'
describe('<Avatar/>', () => {
  it('shound render correctly', () => {
    const { container } = render(<Avatar src='./image.jpg' alt='test' />)

    expect(container.firstChild).not.toBeNull()
  })

  it('shound render correctly label', () => {
    render(<Avatar src='./image.jpg' alt='test' label='test-label' />)

    const label = screen.getByTestId('label')

    expect(label.textContent?.trim()).toBe('test-label')
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Avatar src='./image.jpg' alt='test' label='test-label' />
    )

    expect(container).toMatchSnapshot()
  })
})
