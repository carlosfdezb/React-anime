import styled from 'styled-components';

import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const PlayerBox = styled.div`
    width:96%;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 5%;
    height: auto;
    background-color: ${SECONDARY_COLOR};
    color: black;
    border-radius: 15px 15px 15px 15px;
    -moz-border-radius: 15px 15px 15px 15px;
    -webkit-border-radius: 15px 15px 15px 15px;
    padding-bottom: 20px;
    padding-top: 10px;
`;

export const List = styled.ul`
  padding-left: 0;
  display: inline;
  overflow: scroll;
  width: 100%;
  overflow-y: hidden;
  
`;

export const Item = styled.li`
  padding: 0 ;
`;

export const PlayerH1 = styled.h1`
    margin-top: 15px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 50px;
    text-align: center;
    color: white;
    padding: 5px;
    font-weight: bold;
    background: ${BASE_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
`;

export const Serverh2 = styled.h2`
    text-align: center;
    margin-top: 10px;
    color: white;
`;

export const VideoDiv = styled.div`
    width: 94%;
    margin-top: 20px;
    margin-left: 3%;
    margin-right: 3%;
    padding: 10px;
    height: auto;
    background: ${HIGH_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;

`;

export const VideoDivDesktop = styled.div`
    width: 94%;
    margin-top: 100px;
    margin-left: 3%;
    margin-right: 3%;
    padding: 10px;
    height: 785px;
    background: ${SECONDARY_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    border-radius: 5px;

`;

export const ServerBtn = styled.h1`
    margin-top: 15px;
    margin-left: 30%;
    margin-right: 30%;
    border-radius: 50px;
    text-align: center;
    color: white;
    font-size: 20px;
    padding: 5px;
    font-weight: bold;
    background: ${BASE_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    
    &:active {
      background: ${SECONDARY_COLOR};
    }
`;

export const ButtonDiv = styled.div`
  display: flex;
`;

export const EpisodesH1 = styled.div`
    display:flex;
    height: 50px;
    position: relative;
    align-items:center;
    justify-content: center;
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 50px;
    text-align: center;
    color: white;
    padding: 5px;
    background: ${BASE_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
`;

export const EpisodesH1Desktop = styled.div`
    display:flex;
    height: 50px;
    position: relative;
    align-items:center;
    justify-content: center;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 20px;
    border-radius: 50px;
    text-align: center;
    color: white;
    padding: 5px;
    background: ${SECONDARY_COLOR};
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
`;

export const Center = styled.h1`
  cursor: pointer;
  position: absolute;
  font-size: 15px;
  padding-top: 16px;
  width: 40%;
  height: 100%;
  vertical-align: middle;
  &:active {
      background: ${SECONDARY_COLOR};
    }
`;

export const Left = styled.h1`
  cursor: pointer;  
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 10px;
  width: auto;
  height: auto;
`;

export const Right = styled.h1`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 10px;
  width: auto;
  height: auto;
`;

export const Linked = styled.a`
  color: inherit;
`;
