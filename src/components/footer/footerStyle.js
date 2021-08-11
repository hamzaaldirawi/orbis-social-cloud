import styled from 'styled-components'
import supportsWebP from 'supports-webp';

const imageUrl = '/images/footer-bg.png'
const webpUrl = '/images/footer-bg.webp'

export const FooterContainer = styled.div`
    background-image: url(${supportsWebP ? webpUrl : imageUrl});
    height: 175px;
    margin-top: -80px;
    background-size: auto;
    @media (max-width: 767px) {
        height: 126px;
        margin-top: -60px;
        background-position: center;
    }
`