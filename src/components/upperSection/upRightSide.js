import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload'
import {
    RightDiv,
    MockupImg
} from './upRightStyle'

const RightSide = () => {
    const [matchs, setMatchs] = useState(window.matchMedia("(min-width: 769px)").matches)
    
    useEffect(() => {
        const handler = (e) => setMatchs( e.matches );
        window.matchMedia("(min-width: 768px)").addListener(handler);
    }, []);
    return (
        <LazyLoad height={200} once >
            <RightDiv>
                {matchs && (
                    <picture>
                        <source srcSet='/images/big-mock-up.webp' />
                        <source srcSet='/images/big-mock-up.png' />
                        <MockupImg width='650px' height='650px' src='./images/big-mock-up.png' alt='orbis-mockup' />
                    </picture>
                )}
                {!matchs && (
                    <picture>
                        <source srcSet='/images/mobile-mock-up.webp' />
                        <source srcSet='/images/mobile-mock-up.png' />
                        <MockupImg width='650px' height='650px' src='./images/mobile-mock-up.png' alt='orbis-mockup' />
                    </picture>
                )}
            </RightDiv>
        </LazyLoad>
    );
}

export default RightSide;