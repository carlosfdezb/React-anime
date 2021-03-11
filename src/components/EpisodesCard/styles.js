import styled, { css } from 'styled-components';
import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR, HEADER_COLOR } from '../../styles/DarkMode';

export const EpisodesBox = styled.div`
    width:96%;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 5%;
    height: auto;
    background-color: ${SECONDARY_COLOR};
    border-radius: 15px 15px 15px 15px;
    -moz-border-radius: 15px 15px 15px 15px;
    -webkit-border-radius: 15px 15px 15px 15px;
    padding-bottom: 20px;
    padding-top: 10px;
`;

export const EpisodesBoxDesktop = styled.div`
    width:95%;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 5%;
    height: auto;
    background-color: ${SECONDARY_COLOR};
    border-radius: 5px;
    padding-bottom: 20px;
    padding-top: 10px;
`;

export const EpisodesH1 = styled.div`
    display:flex;
    position: relative;
    align-items:center;
    justify-content: center;
    margin-top: 15px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    color: white;
    padding: 5px;
    font-weight: bold;
    background: ${BASE_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
`;

export const SortDiv = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 5px;
  width: auto;
  height: auto;
`;

export const SortDivDesktop = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 7px;
  width: 55px;
  height: 45px;
  background-color: ${BASE_COLOR};
  border-radius: 50px;
  padding: 10px;
`;

export const List = styled.ul`
  padding-left: 0;
  display: inline;
  overflow: scroll;
  width: 100%;
  overflow-y: hidden;
  
`;

export const ListDesktop = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: hidden;
  margin-left: 5px;
  margin-top: 100px;
  
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

export const EpisodeDiv = styled.div`
    display: flex;
    position: relative;
    color: white;
    width: 94%;
    margin-top: 20px;
    margin-left: 3%;
    margin-right: 3%;
    height: auto;
    background: ${HIGH_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    border-radius: 10px 0px 0px 10px;
    -moz-border-radius: 10px 0px 0px 10px;
    -webkit-border-radius: 10px 0px 0px 10px;
    padding: 30px;

    ${(props) => props.watched && css`
      {
        
        background: ${BASE_COLOR};
        color: white;
        font-style: italic;
      }
    `}
`;

export const EpisodeDivDesktop = styled.div`
    position: relative;
    color: white;
    height: 180px;
    width: 285px;
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    margin: 10px;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: 285px 180px;
    border: 3px solid ${SECONDARY_COLOR};

    &:hover {
      -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
      -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
      box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    }
`;

export const DivTitleDesktop = styled.div`
    position: absolute;
    width: auto;
    height: auto;
    top: 0;
    color:white;
    padding: 10px;
    text-align: left;
    font-size: 20px;
    text-shadow: 2px 2px 8px ${BASE_COLOR};
    margin: 5px;
`;

export const FaIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  color: green;
  margin-right: 160px;
`;

export const EpisodeImg = styled.img`
    right: 0;
    top: 0;
    bottom:0;
    position: absolute;
    height: 88px;

`;

export const EpisodeImgDesktop = styled.img`
    width: 34vh;

`;

export const NextEpisodeDesktop = styled.div`
  position: absolute;
  background-color: ${BASE_COLOR};
  border-radius: 25px;
  padding: 10px;
  color: white;
  top: 0;
  right: 0;
  margin-top: 9px;
  margin-right: 70px;
  font-size: 15px;
`;
