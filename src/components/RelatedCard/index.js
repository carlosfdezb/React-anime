import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { RelatedBox, RelatedH1, List, Item, RelatedBoxDesktop } from './styles';
import { BASE_URL, MAL_API } from '../../urls/url';
import { BASE_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

import { AnimeCard } from '../AnimeCard';

export const RelatedCard = ({ id }) => {
  const [related, setRelated] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  const ide = id.split('-')[0];

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/SearchRelated/${ide.replace('san', '')}`)
      .then((res) => res.json())
      .then((info) => {
        setRelated(info);
      });

  }, []);

  useEffect(() => {
    window.fetch(`${BASE_URL}/api/v1/animeMalId/${id}`)
      .then((res) => res.json())
      .then((info) => {
        window.fetch(`${MAL_API}${info}`)
          .then((res) => res.json())
          .then((info) => {
            setFilter(info.related);
            setLoading(false);
          });
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
              filter['Alternative version'] && related.search && related.search.map((rel) => (
                filter['Alternative version'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Versión Alternativa' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Prequel'] && related.search && related.search.map((rel) => (
                filter['Prequel'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Precuela' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Sequel'] && related.search && related.search.map((rel) => (
                filter['Sequel'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Secuela' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Summary'] && related.search && related.search.map((rel) => (
                filter['Summary'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Resumen' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Parent story'] && related.search && related.search.map((rel) => (
                filter['Parent story'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Historia Principal' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Side story'] && related.search && related.search.map((rel) => (
                filter['Side story'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Historia Secundaria' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Other'] && related.search && related.search.map((rel) => (
                filter['Other'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Otros' searchSize='true' /></Item>))
              ))
            }
          </List>
        )

      }
    </RelatedBox>
  );
};

export const RelatedCardDesktop = ({ id }) => {
  const [related, setRelated] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  const ide = id.split('-')[0];

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/SearchRelated/${ide.replace('san', '')}`)
      .then((res) => res.json())
      .then((info) => {
        setRelated(info);
      });

  }, []);

  useEffect(() => {
    window.fetch(`${BASE_URL}/api/v1/animeMalId/${id}`)
      .then((res) => res.json())
      .then((info) => {
        window.fetch(`${MAL_API}${info}`)
          .then((res) => res.json())
          .then((info) => {
            setFilter(info.related);
            setLoading(false);
          });
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
              filter['Alternative version'] && related.search && related.search.map((rel) => (
                filter['Alternative version'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Versión Alternativa' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Prequel'] && related.search && related.search.map((rel) => (
                filter['Prequel'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Precuela' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Sequel'] && related.search && related.search.map((rel) => (
                filter['Sequel'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Secuela' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Summary'] && related.search && related.search.map((rel) => (
                filter['Summary'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Resumen' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Parent story'] && related.search && related.search.map((rel) => (
                filter['Parent story'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Historia Principal' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Side story'] && related.search && related.search.map((rel) => (
                filter['Side story'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Historia Secundaria' searchSize='true' /></Item>))
              ))
            }
            {
              filter['Other'] && related.search && related.search.map((rel) => (
                filter['Other'].map((fil) => (rel.malId.malId === fil.mal_id && <Item key={rel.id}><AnimeCard {...rel} relatedTitle='Otros' searchSize='true' /></Item>))
              ))
            }
          </List>
        )

      }
    </RelatedBoxDesktop>
  );
};
