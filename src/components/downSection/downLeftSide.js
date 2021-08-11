import { VideoDiv } from './downLeftStyle'
import LazyLoad from 'react-lazyload'

const LeftSide = () => (
    <LazyLoad height={200} once >
        <VideoDiv>
            <iframe
                src="https://www.youtube.com/embed/ZXgykbuRWTc?controls=0"
                width="530"
                height="300"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                thumbnail='/images/youtube-thumbnail.png"'
            >
            </iframe>
        </VideoDiv>
    </LazyLoad>

)

export default LeftSide;