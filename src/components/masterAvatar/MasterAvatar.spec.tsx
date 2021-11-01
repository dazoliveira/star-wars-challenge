import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from "utils/tests/helpers";
import MasterAvatar, { MasterAvatarProps } from './MasterAvatar';
import imgTest from '../../features/jediVsDarkseid/imgs/luke-skywalker.png'

const props: MasterAvatarProps = {
    variant: true,
    isMobile: false,
    avatarSrc: imgTest,
    text: 'Your master is',
    avatarName: 'Luke Skywalker'
}

describe('<MasterAvatar />', () => {
    it('should render master avatar', () => {
        const { container } = renderWithTheme(<MasterAvatar {...props} />)
        expect(screen.getByText(/Your master is/i)).toBeInTheDocument()
        expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()

    })

    // it('should back to /welcome url on back click', async () => {
    //    const { getByText } = renderWithTheme(<MasterAvatar {...props} />)

    //     const link = getByText(/back/i)

    //     userEvent.click(link)

    //     const location = window.location.pathname
    //     const welcomePage = '/welcome'

    //     expect(location).toEqual(welcomePage)
    // })
});