import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { BASE_URL } from '../../urls/url';
import { List, Item, ImgDiv, CardDiv, CharacterImg, CardH1, CardP } from './styles';
import { BASE_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const CharactersCard = ({ id }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/getCharacters/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setCharacters(info);
        setLoading(false);
      });

  }, []);
  return (
    <List>
      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : characters.map((char) => (
          char.character.image.includes('.gif') ? '' :
            (
              <Item key={char.name}>

                <ImgDiv>
                  <CharacterImg alt='' src={char.character.image} />
                </ImgDiv>
                <CardDiv>
                  <CardH1>{char.character.name}</CardH1>
                  {
                    char.character.role === 'Main' ? <CardP>Principal</CardP> : <CardP>Secundario</CardP>
                  }
                </CardDiv>
              </Item>
            )
        ))
      }
    </List>
  );
};
