import { HeaderContainer, CenteredNavbar } from './headerStyle'
import { ReactComponent as Logo } from '../../logo.svg'

const Header = () => (
  <HeaderContainer>
    <CenteredNavbar>
      <Logo />
    </CenteredNavbar>
  </HeaderContainer>
)

export default Header;