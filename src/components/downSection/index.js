import { Container, Row, Col } from 'react-bootstrap'
import loadable from '@loadable/component'

const RightSide = loadable(() => import('./downRightSide'))
const LeftSide = loadable(() => import('./downLeftSide'))


const DownSection = () => (
    <Container>
        <Row>
            <Col xl={7} lg={6} className='no_padding'>
                <LeftSide />
            </Col>
            <Col xl={5} lg={6} className='no_padding'>
               <RightSide />
            </Col>
        </Row>
    </Container>
);

export default DownSection;