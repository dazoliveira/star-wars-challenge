import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from "utils/tests/helpers";
import ChooseButton, { ChooseButtonProps } from './ChooseButton'

const props: ChooseButtonProps = {
    handleOnClick: jest.fn(),
    isMobile: false,
    variant: true,
    text: 'choose your path again, Padawan',
    isDisabled: false,
    yourPath: 'jedi'
}

describe('<ChooseButton />', () => {
    it('should render choose button able', () => {
        const { container } = renderWithTheme(<ChooseButton {...props} />)
        setTimeout(() => {
            expect(screen.queryByTestId('choose-button')).toBeInTheDocument()
            expect(screen.queryByTestId('choose-button')).not.toHaveClass("Mui-disabled")
            expect(container.firstChild).toMatchSnapshot()
        }, 2000)
    })

    it('should call choose button click handle', async () => {
        renderWithTheme(<ChooseButton {...props }/>)
        setTimeout(() => {
            const chooseButton = screen.getByRole('button', {
                name: 'choose your path again, Padawan'
            })
            userEvent.click(chooseButton)
            expect(props.handleOnClick).toHaveBeenCalled()
        }, 2000)


    })

    it('should render disable button', () => {
        props.isDisabled = true
        renderWithTheme(<ChooseButton {...props }/>)
        setTimeout(() => {
            const chooseButton = screen.getByRole('button', {
                name: 'choose your path again, Padawan'
            })
            userEvent.click(chooseButton)
            expect(props.handleOnClick).toHaveBeenCalled()
        }, 2000)
    })

    it('should render correct button text', () => {
        const { getByText } = renderWithTheme(<ChooseButton {...props }/>)
        setTimeout(() => {
            const text = getByText('choose your path again, Padawan')
            expect(text).toBeInTheDocument() 
        }, 2000)
    })
});