import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { ReactComponent as AppStore } from '../../assets/app-store-icon.svg'
import { ReactComponent as PlayStore } from '../../assets/play-store-icon.svg'
 
// Left Side
export const LeftDiv = styled.div`
    height: 85%;
    display: flex;
    align-items: center;
`
export const AppleIcon = styled(AppStore) `
    width: 40px;
    height: 44px;
`
export const PlayIcon = styled(PlayStore) `
    width: 32px;
    height: 44px;
`
export const HeadingLeft = styled.h1`
    font-size: 32px;
    color: #000;
    font-weight: 800;
    font-style: italic;
    line-height: 2.2rem;
    margin-bottom: 10px;
    @media (max-width: 991px) {
        text-align: center;
    }
    @media (max-width: 767px) {
        font-size: 24px;
    }
`
export const TextLeft = styled.p`
    font-size: 16px;
    color: #707070;
    margin-bottom: 15px;
    @media (min-width: 992px) {
        width: 85%;
    }
    @media (max-width: 991px) {
        text-align: center;
        padding-right: 5px;
        padding-left: 5px;
    }
    @media (max-width: 767px) {
        font-size: 14px;
    }
`
export const ButtonContainer = styled.span `
    display: flex;
    @media (max-width: 991px) {
        flex-direction: column;
        width: 200px;
        margin: 0 auto;
    }
`
export const AnchorButton = styled.a`
    z-index: 1;
`
export const DownloadButton = styled(Button) `
    display: flex;
    margin-bottom: 15px;
    background: #000;
    padding-left: 0;
    padding-right: 0;
    margin-right: 15px;
    width: 200px;
    border-radius: 15px;
    border: none;

    &:hover,
    &:focus,
    &:active,
    &:target,
    &:visited {
        background: #000;
        border: none;
    }
`
export const DownloadButtonLeftDiv = styled.div `
    width: 30%;
    justify-content: center;
`
export const DownloadButtonRightDiv = styled.div `
    width: 70%;
`
export const ButtonUpperText = styled.p `
    padding: 0;
    font-size: 12px;
    text-align: left;
`
export const ButtonDownText = styled.p `
    padding: 0;
    font-size: 24px;
    text-align: left;
    font-weight: 700;
    font-style: italic;
    margin-top: -9px;
`