import styled from 'styled-components'
import supportsWebP from 'supports-webp';

const imageUrl = '/images/bg-img-up.png'
const webpUrl = '/images/bg-img-up.webp'

export const RightDiv = styled.div`
    background-image: url(${supportsWebP ? webpUrl : imageUrl});
    width: 765px;
    margin-top: -100px;
    @media (max-width: 1200px) {
        width: 100%;
    }
`
export const MockupImg = styled.img`
    width: 100%;
    height: 100%;
    @media (max-width: 991px) {
        margin-top: 80px;
    }
`