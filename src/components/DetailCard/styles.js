import styled, { css } from 'styled-components';

import { TEXT_COLOR, BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR, HEADER_COLOR } from '../../styles/DarkMode';

export const HeaderBox = styled.div`
    width:96%;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 5%;
    height: auto;
    background-color: ${SECONDARY_COLOR};
    color: ${TEXT_COLOR};
    border-radius: 0px 0px 15px 15px;
    -moz-border-radius: 0px 0px 15px 15px;
    -webkit-border-radius: 0px 0px 15px 15px;
    padding-bottom: 20px;
`;

export const HeaderBoxDesktop = styled.div`
    width: calc(100% + 20px);
    margin-top: 62px;
    color: ${TEXT_COLOR};
    transform: translateX(-20px);
`;

export const H1 = styled.h1`
    color:black;
`;

export const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 20vw;

    ${(props) => props.img && css`
        {
            background-image: url(${props.img});
            background-repeat: no-repeat;
            background-size: 100% auto;
        }
    `}
`;

export const GradientDiv = styled.div`
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000a12);
    z-index: 999;
    height: 100%;
    width: 100%;
`;

export const GradientImage = styled.div`
    width: 100%;
    height: 100px;
    background-image: url(${(props) => props.img});
    background-position: bottom;
    filter: blur(30px);
    background-size: cover;
`;

export const PosterSkeleton = styled.div`
    width: 45%!important;
    height: 100%;
    border: 5px solid white;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    transform: translateY(-10%);
    margin-left: 7%;
`;

export const Poster = styled.img`
    width: 45%!important;
    height: 100%;
    border: 5px solid ${SECONDARY_COLOR};
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    transform: translateY(-10%);
    margin-left: 7%;
`;

export const PosterDesktop = styled.img`
    position: absolute;
    width: 11vw;
    border: 5px solid ${SECONDARY_COLOR};
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    right: 0;
    top: 0;
    margin-top: 30px;
    margin-right: 4.7%;
`;

export const Text = styled.p`
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: justify;

    ${(props) => props.alignLeft && css`
        text-align: center;
    `}
    ${(props) => props.alignRight && css`
        text-align: center;
        margin-left: 12px;
    `}
    ${(props) => props.skeleton && css`
        margin: 30px;
        line-height: 2;

    `}
`;

export const Title = styled.p`
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 50px;
    text-align: center;
    color: white;
    padding: 5px;
    font-weight: bold;
    background: ${BASE_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);

    ${(props) => props.alignRight && css`
        
        margin-left: 12px;
    `}
`;

export const HeaderDesktop = styled.div`
    display: inline;
    position: absolute;
    margin-top: 15px;
    margin-left: 30px;
    margin-right: 10px;
    color: white;
    font-weight: bold;
    bottom: 0;
    width: 75%;
    margin-bottom: 20px;
    text-shadow: 2px 2px 8px ${BASE_COLOR};
`;

export const IconContainer = styled.div`
    position: absolute;
    transform: translateX(100%) translateY(-190%);
`;

export const StatusDiv = styled.h4`
    position: absolute;
    transform: translateX(70%) translateY(-330%);
`;

export const TitleDesktop = styled.p`   
    color: white;
    font-weight: bold;
    font-size: 4vw;
    text-shadow: 2px 2px 8px ${BASE_COLOR};
`;

export const Body = styled.div`
    display: flex;
    margin-bottom: -10px;
`;

export const TextLeft = styled.div`
    display: inline;
    width: 50%;
`;

export const FlexDiv = styled.div`
    display: flex;
`;

export const TextRight = styled.div`
    margin-top: 10px;
    width: 50%;
    display: inline;
    line-height: 1;

    ${(props) => props.skeleton && css`
        margin: 15px;
        margin-top: 40px;
        line-height: 2;

    `}
`;

export const NextEpisode = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 50px;
    position: absolute;
    bottom:0;
    right: 0;
    font-size: 15px;
    padding: 5px;
    margin-right: 60px;
    margin-bottom: 5px;
`;

export const NextEpisodeDesktop = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 50px;
    position: absolute;
    top:0;
    left: 0;
    font-size: 15px;
    padding: 5px;
    margin-left: 10px;
    margin-top: 10px;
`;

export const Rating = styled.h2`
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 50px;
    position: absolute;
    bottom:0;
    right: 0;
    font-size: 15px;
    padding: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
`;

export const RatingDesktop = styled.div`
    position: absolute;
    display: grid;
    font-size: 1vw;
    margin: 10px;
    width: 3vw;
    text-shadow: 4px 4px 8px ${BASE_COLOR};
    right: 0;
    margin-top: 15%;
    margin-right: 4%;
    z-index: 999;
`;

export const BadgeDiv = styled.div`
    display: flex;
    width: auto;
    height: auto;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 30px;

`;

export const Badge = styled.h2`
    background: ${BASE_COLOR};
    color: white;
    border-radius: 50px;
    font-size: 12px;
    padding: 6px;
    margin-right: 5px;
    margin-bottom: 5px;
`;

export const BadgeDesktop = styled.h2`
    background: #69afef;
    color: white;
    border-radius: 50px;
    font-size: 15px;
    padding: 6px;
    margin-left: 10px;
    margin-bottom: 5px;
`;

export const FavDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 50px;
    position: absolute;
    bottom:0;
    right: 0;
    font-size: 15px;
    padding: 5px;
    margin-right: 5px;
    margin-bottom: 35px;
    align-items: center;
    justify-content: center;
    transition: 1s;
`;

export const FavDivDesktop = styled.div`
    cursor: pointer;
    background-color: #69afef;
    color: white;
    border-radius: 50px;
    position: absolute;
    bottom:0;
    right: 0;
    font-size: 1.1vw;
    padding: 20px;
    z-index: 999;
    transform: translateX(-60px) translateY(30px);
`;

export const SvgDiv = styled.div`
    margin-top: 7px;
`;

export const BtnFav = styled.button`
    color: white;

    
`;

export const EpisodesDiv = styled.div`
    width: 54%;
    height: auto;
    z-index: 9999;
    margin-top: 4%;
    margin-left: 3%;
    margin-right: 1%;
    transform: translateY(-150px);
    padding: 60px;
`;

export const InfoDiv = styled.div`
    display: inline;
    width: 40%;
    z-index: 9999;
    margin-top: 4%;
    margin-right: 3%;
    margin-left: 1%;
    transform: translateY(-150px);
    padding: 60px;
`;

export const InfoBody = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const List = styled.ul`
  padding-left: 0;
  display: inline;
  width: 100%;
`;

export const Item = styled.li`
  padding: 0 ;

  ${(props) => props.skeleton && css`
    {
      margin-left: 3%;
      margin-right: 3%;
      margin-top: 20px;
    }
  `}
`;

export const ListDiv = styled.div`
  height: 700px;
  margin-top: 20px;
  overflow: hidden;

  &:hover {
    overflow-y: scroll;
  }
`;

export const PlayDiv = styled.div`
    visibility: hidden;
    display: none;
    margin-top: 5px;
`;

export const NumberDiv = styled.div`
    visibility: visible;
    display: block;
    margin-top: 5px;
`;

export const EpisodeCard = styled.div`
    padding: 40px;
    margin: 10px;
    height: 125px;
    width: 700px;
    position: relative;
    display: flex;
    

    &:hover {
        ${PlayDiv} {
            visibility:visible;
            display: block;
        }
        ${NumberDiv} {
            visibility:hidden;
            display: none;
        }
        background-color: ${HEADER_COLOR};
    }

`;

export const PreviewImage = styled.img`
    position: absolute;
    width: 200px;
    height: 105px;
    transform: translateY(-30px) translateX(60px);
`;

export const TextEpisodeCard = styled.h4`
    position: absolute;
    transform: translateY(-10px) translateX(280px);
    width: 50%;
    height: auto;
`;

export const EpisodesHeader = styled.div`
    position: relative;
`;

export const ShowMore = styled.div`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #69afef;
    border-radius: 25px;
    padding: 10px;
`;

export const TypeDiv = styled.div`
    margin-left: 10px;
`;
