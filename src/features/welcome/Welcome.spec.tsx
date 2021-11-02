import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from "utils/tests/helpers";
import Welcome from './Welcome';


let location: string = ''
let welcomePage: string = ''

describe('<Welcome />', () => {

    it('should render Welcome page with start button', () => {

        const { container } = renderWithTheme(<Welcome />)

        const startButton = screen.queryByText(/S T A R T/i)

        expect(startButton).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should start button click render request result page',async () => {
        const { getByRole } = renderWithTheme(<Welcome />)

        const startButton = getByRole('button')

       await userEvent.click(startButton)

       await setTimeout(() => {
        location = window.location.pathname
        welcomePage = '/jedi-vs-darkside'
       }, 5000)

        expect(location).toEqual(welcomePage)
    })
});