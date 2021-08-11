import { Container, Col } from 'react-bootstrap'
import loadable from '@loadable/component'

import { UpperRow } from './mainStyle'
const LeftSide = loadable(() => import('./upLeftSide'))
const RightSide = loadable(() => import('./upRightSide'))


const UpperSection = () => (
    <Container>
        <UpperRow>
            <Col lg={5} className='no_padding'>
                <LeftSide />
            </Col>
            <Col lg={7} className='no_padding'>
               <RightSide />
            </Col>
        </UpperRow>
    </Container>
)

export default UpperSection;