import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
    margin: 25px 0;

    @media (max-width: 991px) {
        margin: 25px auto;
        width: 50%;
    }
`
export const CenteredNavbar = styled(Navbar)`
    @media (max-width: 991px) {
        justify-content: center;
    }
`