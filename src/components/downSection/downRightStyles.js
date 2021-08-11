import styled from 'styled-components'

export const RightDiv = styled.div`
    height: 315px;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    @media(max-width: 1199px) {
        height: 290px;
    }
`
export const HeadingRight = styled.h1`
    font-size: 32px;
    color: #000;
    font-weight: 700;
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

export const TextRight = styled.p`
    font-size: 16px;
    color: #444;
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