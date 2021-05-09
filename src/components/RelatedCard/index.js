import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { RelatedBox, RelatedH1, List, Item, RelatedBoxDesktop } from './styles';
import { BASE_URL, MAL_API } from '../../urls/url';
import { BASE_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

import { AnimeCard } from '../AnimeCard';

export const RelatedCard = ({ id }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/SearchRelated/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setRelated(info.search);
        setLoading(false);
      });

  }, []);

  return (
    <RelatedBox>
      <RelatedH1>Relacionados</RelatedH1>
      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (
          <List>
            {
              related && related.map((rel) => <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Precuela' searchSize='true' /></Item>)
            }
          </List>
        )

      }
    </RelatedBox>
  );
};

export const RelatedCardDesktop = ({ id }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/SearchRelated/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setRelated(info.search);
        setLoading(false);
      });

  }, []);

  return (
    <RelatedBoxDesktop>
      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={155} height={230} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (
          <List>
            {
              related && related.map((rel) => <Item key={rel.id}><AnimeCard {...rel} relatedTitle='' searchSize='true' /></Item>)
            }
          </List>
        )

      }
    </RelatedBoxDesktop>
  );
};
