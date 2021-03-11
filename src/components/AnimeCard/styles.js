import styled, { css } from 'styled-components';

export const DivBox = styled.div`
position: relative;
    height: 320px;
    width: 210px;
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

    ${(props) => props.searchSize && css`
        {
            height: 235px;
            width: 160px;
            @media (max-width: 500px) {
                height: 230px;
                width: 40vw;
            }
        }
    `}

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

