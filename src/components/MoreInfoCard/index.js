import React from 'react';
import { MoreInfoBox, MoreInfoH1, MoreInfoH1Desktop } from './styles';

import { AnimeImages } from '../AnimeImages';
import { ExtraInfoCard, ExtraInfoCardDesktop } from '../ExtraInfoCard';
import { CharactersCard } from '../CharactersCard';

export const MoreInfoCard = ({ id }) => {
  return (
    <MoreInfoBox>
      <MoreInfoH1>Más Información</MoreInfoH1>
      <AnimeImages id={id} />
      <ExtraInfoCard id={id} />
      <MoreInfoH1 marginExtra='true'>Personajes</MoreInfoH1>
      <CharactersCard id={id} />
    </MoreInfoBox>
  );
};

export const MoreInfoCardDesktop = ({ id }) => {
  return (
    <>
      <AnimeImages id={id} />
      <ExtraInfoCardDesktop id={id} />
      <MoreInfoH1Desktop marginExtra='true'>Personajes</MoreInfoH1Desktop>
      <CharactersCard id={id} />
    </>
  );
};

