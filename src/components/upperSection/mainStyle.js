import { Row } from 'react-bootstrap'
import styled from 'styled-components'

export const UpperRow = styled(Row)`
    @media (max-width: 991px) {
        display: flex;
        flex-direction: column-reverse;
    }
`