import {
    LeftDiv,
    AppleIcon,
    PlayIcon,
    HeadingLeft,
    TextLeft,
    ButtonContainer,
    AnchorButton,
    DownloadButton,
    DownloadButtonLeftDiv,
    DownloadButtonRightDiv,
    ButtonUpperText,
    ButtonDownText
    } from './upLeftStyle'

const LeftSide = () => (
    <LeftDiv>
    <div>
        <HeadingLeft>
            Meet Social <br /> Groups Offline
        </HeadingLeft>
        <TextLeft>A geolocation social network created to map the social groups in your region. With Orbis, you can check where those groups are in real time and get to know them.</TextLeft>
        <ButtonContainer>
            <AnchorButton 
                href='https://apps.apple.com/gb/app/orbis-local-groups-discovery/id1453025529#?platform=iphone' target='_blank'
                rel='noreferrer'
            >
                <DownloadButton>
                    <DownloadButtonLeftDiv>
                        <AppleIcon />
                    </DownloadButtonLeftDiv>
                    <DownloadButtonRightDiv>
                        <ButtonUpperText>
                        Download on
                        </ButtonUpperText>
                        <ButtonDownText>
                        App Store
                        </ButtonDownText>
                    </DownloadButtonRightDiv>
                </DownloadButton>
            </AnchorButton>
            <AnchorButton
                href='https://play.google.com/store/apps/details?id=com.orbis.orbis&rdid=com.orbis.orbis'
                target='_blank'
                rel='noreferrer'
            >
                <DownloadButton>
                    <DownloadButtonLeftDiv>
                        <PlayIcon />
                    </DownloadButtonLeftDiv>
                    <DownloadButtonRightDiv>
                        <ButtonUpperText>
                        Download on
                        </ButtonUpperText>
                        <ButtonDownText>
                        Play Store
                        </ButtonDownText>
                    </DownloadButtonRightDiv>
                </DownloadButton>
            </AnchorButton>
        </ButtonContainer>
    </div>
    </LeftDiv>
)

export default LeftSide;