 import styled from 'styled-components'

 export const VideoDiv = styled.div`
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
    @media(max-width: 767px) {
        width: 90%;
        padding-bottom: 260px;
        margin: auto;
    }
    @media (max-width: 766px) {
        padding-bottom: 250px;
    }
    @media (max-width: 539px) {
        padding-bottom: 190px;
    }
    @media (max-width: 375px) {
        padding-bottom: 170px;
    }
    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 25px;
        @media (min-width: 1200px) {
            width: 530px;
            height: 300px;
        }
        @media (max-width: 1199px) {
            width: 450px;
            height: 290px;
        }
        @media (max-width: 991px) {
            margin-top: 30px;
            width: 100%;
            height: 100%;
        }
        @media (max-width: 767px) {
            height: 275px;
            margin-top: 20px;
        }
        @media (max-width: 766px) {
            height: 260px;
        }
        @media (max-width: 539px) {
            height: 195px;
        }
        @media (max-width: 375px) {
            height: 175px;
        }
        @media (max-width: 300px) {
            height: 145px;
        }
    }
 `