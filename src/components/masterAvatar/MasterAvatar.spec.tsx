import { screen } from '@testing-library/react'
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

    it('should render Luck Skywalker image', async () => {
       renderWithTheme(<MasterAvatar {...props} />)

       const displayedImage = document.querySelector("img") as HTMLImageElement;
       expect(displayedImage.src).toContain("luke-skywalker.png");
    })
});