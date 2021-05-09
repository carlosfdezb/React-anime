import React, { useState, useEffect } from 'react';
import { AiFillTrophy } from 'react-icons/ai';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ListDiv, List, Item, DivHeader, DivEmoji, DivH1, DivButton, Button } from './styles';
import { TopCard } from '../TopCard';
import { BASE_URL } from '../../urls/url';
import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const ListOfTop = ({ title, emoji }) => {
  const [render, setRender] = useState([]);
  const [incoming, setIncoming] = useState([]);
  const [top, setTop] = useState([]);
  const [airing, setAiring] = useState([]);
  const [loading, setLoading] = useState(true);

  const [btnTitle, setBtnTitle] = useState('Esperados');

  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/TopFuture`)
      .then((res) => res.json())
      .then((n) => {
        setIncoming(n.future);
        setRender(n.future);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/TopAllTime`)
      .then((res) => res.json())
      .then((n) => {
        setTop(n.top);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/TopAiring`)
      .then((res) => res.json())
      .then((n) => {
        setAiring(n.airing);
        setLoading(false);
      });
  }, []);

  const stateControlBtn1 = () => {
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
    setRender(incoming);
    setBtnTitle('Esperados');
  };
  const stateControlBtn2 = () => {
    setBtn1(false);
    setBtn2(true);
    setBtn3(false);
    setRender(top);
    setBtnTitle('Populares');
  };
  const stateControlBtn3 = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(true);
    setRender(airing);
    setBtnTitle('En Emisión');
  };

  return (
    <ListDiv>
      <DivHeader>
        <DivEmoji>
          <AiFillTrophy color={BASE_COLOR} size='32px' />
        </DivEmoji>
        <DivH1>
          {title}
        </DivH1>
      </DivHeader>
      <DivButton>
        {
          btn1 === true ? <Button select='true'>Esperados</Button> : <Button onClick={() => stateControlBtn1()}>Esperados</Button>
        }
        {
          btn2 === true ? <Button select='true'>Populares</Button> : <Button onClick={() => stateControlBtn2()}>Populares</Button>
        }
        {
          btn3 === true ? <Button select='true'>En Emisión</Button> : <Button onClick={() => stateControlBtn3()}>En Emisión</Button>
        }
      </DivButton>
      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (
          <List>
            {
              render && render.map((soon) => (
                <Item key={soon.id}>
                  <TopCard {...soon} section={btnTitle} />
                </Item>
              ))
            }
          </List>
        )
      }

    </ListDiv>
  );
};
