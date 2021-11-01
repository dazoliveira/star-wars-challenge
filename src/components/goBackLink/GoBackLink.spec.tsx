import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from "utils/tests/helpers";
import GoBackLink, { GoBackLinkProps } from './GoBackLink';


const props: GoBackLinkProps = {
    variant: false,
    url: '/welcome'
}

describe('<GoBackLinkProps />', () => {
    it('should render back link', () => {
        const { container } = renderWithTheme(<GoBackLink {...props} />)
        expect(screen.getByText('back')).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should back to /welcome url on back click', async () => {
       const { getByText } = renderWithTheme(<GoBackLink {...props} />)

        const link = getByText(/back/i)

        userEvent.click(link)

        const location = window.location.pathname
        const welcomePage = '/welcome'

        expect(location).toEqual(welcomePage)
    })
});