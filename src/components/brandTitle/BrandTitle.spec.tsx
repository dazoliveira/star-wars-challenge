import { screen } from '@testing-library/react'
import { renderWithTheme } from "utils/tests/helpers";
import BrandTitle, { BrandTitleProps } from './BrandTitle'

let props:BrandTitleProps = {
    welcomeText: 'Welcome to' , 
    brandName: 'IClinic',
    subTitle: 'frontend test', 
}

describe('<BrandTitle />', () => {

    it('should render brand title', () => {

        const { container } = renderWithTheme(<BrandTitle {...props }/>)

        expect(screen.queryByTestId('brand-title')).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render welcome text', () => {

        renderWithTheme(<BrandTitle {...props }/>)

        expect(screen.queryByText('Welcome to')).toBeInTheDocument()
    })

    it('should render brand name text', () => {

        renderWithTheme(<BrandTitle {...props }/>)

        expect(screen.queryByText('IClinic')).toBeInTheDocument()
    })

    it('should render brand subtitle text', () => {

        renderWithTheme(<BrandTitle {...props }/>)

        expect(screen.queryByText('frontend test')).toBeInTheDocument()
    })
});