import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 320px;
    position: relative;
`;

export const NumberDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 150px;
    z-index: 999;
    text-shadow: 2px 2px 8px #000000;
    transform: translateY(-50px);
`;

export const ImgDiv = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 320px;
    width: 225px;
    background-image: url(${(props) => props.poster});
    background-size: auto auto;
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.45);
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 5px 5px 5px 5px;
    -webkit-border-radius: 5px 5px 5px 5px;
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
    border-radius: 0px 0px 5px 5px;
    -moz-border-radius: 0px 0px 5px 5px;
    -webkit-border-radius: 0px 0px 5px 5px;
`;
