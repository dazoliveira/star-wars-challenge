import { screen } from '@testing-library/react'
import { renderWithTheme } from "utils/tests/helpers";
import ChooseButton, { ChooseButtonProps } from './ChooseButton'

const props: ChooseButtonProps = {
    handleOnClick: jest.fn(),
    isMobile: false,
    variant: false,
    text: 'Choose your path, Pad',
    isDisabled: false
}

describe('<ChooseButton />', () => {
    it('should render choose button', () => {
        const { container } = renderWithTheme(<ChooseButton {...props} />)

        expect(screen.queryByTestId('choose-button')).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    // it('should render welcome text', () => {

    //     renderWithTheme(<BrandTitle {...props }/>)

    //     expect(screen.queryByText('Welcome to')).toBeInTheDocument()
    // })

    // it('should render brand name text', () => {

    //     renderWithTheme(<BrandTitle {...props }/>)

    //     expect(screen.queryByText('IClinic')).toBeInTheDocument()
    // })

    // it('should render brand subtitle text', () => {

    //     renderWithTheme(<BrandTitle {...props }/>)

    //     expect(screen.queryByText('frontend test')).toBeInTheDocument()
    // })
});