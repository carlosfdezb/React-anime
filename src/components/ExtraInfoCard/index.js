import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { BASE_URL } from '../../urls/url';
import { InfoBox, ExtraInfoH1, InfoDiv, ExtraInfoP, Text, ExtraInfoH1Desktop } from './styles';
import { BASE_COLOR, HIGH_COLOR, HEADER_COLOR, SECONDARY_COLOR } from '../../styles/DarkMode';

export const ExtraInfoCard = ({ id }) => {
  const [extraInfo, setExtraInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/getMoreInfo/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setExtraInfo(info);
        setLoading(false);
      });

  }, []);
  return (

    loading ? (
      <Text>
        <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
          <Skeleton count={6} />
        </SkeletonTheme>
      </Text>
    ) : extraInfo.map((extra) => (
      <InfoBox>
        <InfoDiv>
          <ExtraInfoH1>Título original</ExtraInfoH1>
          <ExtraInfoP>{extra.titleJapanese}</ExtraInfoP>
        </InfoDiv>
        <InfoDiv>
          <ExtraInfoH1>Fuente</ExtraInfoH1>
          <ExtraInfoP>{extra.source}</ExtraInfoP>
        </InfoDiv>
        <InfoDiv>
          <ExtraInfoH1>Estreno</ExtraInfoH1>
          <ExtraInfoP>{extra.aired.string}</ExtraInfoP>
        </InfoDiv>
        {
          extra.totalEpisodes ? (
            <InfoDiv>
              <ExtraInfoH1>Episodios</ExtraInfoH1>
              <ExtraInfoP>{extra.totalEpisodes}</ExtraInfoP>
            </InfoDiv>
          ) : ''
        }

      </InfoBox>

    ))

  );
};

export const ExtraInfoCardDesktop = ({ id }) => {
  const [extraInfo, setExtraInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/getMoreInfo/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setExtraInfo(info);
        setLoading(false);
      });

  }, []);
  return (

    loading ? (
      <Text>
        <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HEADER_COLOR}>
          <Skeleton count={6} />
        </SkeletonTheme>
      </Text>
    ) : extraInfo.map((extra) => (
      <InfoBox>
        <InfoDiv>
          <ExtraInfoH1Desktop>Título original</ExtraInfoH1Desktop>
          <ExtraInfoP>{extra.titleJapanese}</ExtraInfoP>
        </InfoDiv>
        <InfoDiv>
          <ExtraInfoH1Desktop>Fuente</ExtraInfoH1Desktop>
          <ExtraInfoP>{extra.source}</ExtraInfoP>
        </InfoDiv>
        <InfoDiv>
          <ExtraInfoH1Desktop>Estreno</ExtraInfoH1Desktop>
          <ExtraInfoP>{extra.aired.string}</ExtraInfoP>
        </InfoDiv>
        {
          extra.totalEpisodes ? (
            <InfoDiv>
              <ExtraInfoH1Desktop>Episodios</ExtraInfoH1Desktop>
              <ExtraInfoP>{extra.totalEpisodes}</ExtraInfoP>
            </InfoDiv>
          ) : ''
        }

      </InfoBox>

    ))

  );
};
