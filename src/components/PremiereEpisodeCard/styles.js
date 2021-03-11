import styled from 'styled-components';
import { fadeIn, fadeOut } from '../../styles/animation';

export const DivBox = styled.div`
${fadeIn()}
position: relative;
    height: 150px;
    width: 260px;
    color: black;
    font-size: 7px;
    margin: 10px;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
    background-image: url(${(props) => props.cover});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow-y: hidden;
    transition: .5s;

    &:hover {
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.75);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.75);
    }

`;

export const DivTitle = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0;
    color:white;
    padding: 10px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const HeartDiv = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin: 5px;
`;
