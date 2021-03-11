import styled from 'styled-components';

export const CatDiv = styled.div`
    height: 250px;
    width: 250px;
    border-radius: 15px;
    background-color: white;
    color:black;
    position: relative;
    -webkit-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.30);
    box-shadow: 4px 2px 13px 0px rgba(0,0,0,0.30);
`;

export const CatImg1 = styled.div`
    position: absolute;
    height: 50%;
    width: 50%;
    left: 0;
    top: 0;
    background-image: url(${(props) => props.poster});
    background-size: 100% auto;
    border-radius: 15px 0px 0px 0px;
    -moz-border-radius: 15px 0px 0px 0px;
    -webkit-border-radius: 15px 0px 0px 0px;

`;

export const CatImg2 = styled.div`
    position: absolute;
    height: 50%;
    width: 50%;
    right: 0;
    top: 0;
    background-image: url(${(props) => props.poster});
    background-size: 100% auto;
    border-radius: 0px 15px 0px 0px;
    -moz-border-radius: 0px 15px 0px 0px;
    -webkit-border-radius: 0px 15px 0px 0px;

`;

export const CatImg3 = styled.div`
    position: absolute;
    height: 50%;
    width: 50%;
    left: 0;
    bottom: 0;
    background-image: url(${(props) => props.poster});
    background-size: 100% auto;
    border-radius: 0px 0px 0px 15px;
    -moz-border-radius: 0px 0px 0px 15px;
    -webkit-border-radius: 0px 0px 0px 15px;

`;

export const CatImg4 = styled.div`
    position: absolute;
    height: 50%;
    width: 50%;
    right: 0;
    bottom: 0;
    background-image: url(${(props) => props.poster});
    background-size: 100% auto;
    border-radius: 0px 0px 15px 0px;
    -moz-border-radius: 0px 0px 15px 0px;
    -webkit-border-radius: 0px 0px 15px 0px;
`;

export const DivTitle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    color:white;
    padding-top: 40px;
    padding-left: 10px;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    font-size: 23px;
`;

