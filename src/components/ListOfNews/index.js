import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { List, Item } from './styles';
import { NewsCard } from '../NewsCard';
import { BASE_URL } from '../../urls/url';
import { BASE_COLOR, HIGH_COLOR, SECONDARY_COLOR, TEXT_COLOR } from '../../styles/DarkMode';

export const ListOfNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      window.fetch(`${BASE_URL}/api/v1/animeNews`)
        .then((res) => res.json())
        .then((n) => {
          setNews(n.news);
          setLoading(false);
        });
    }, 200);
  }, []);
  return (
    <List>
      {
        loading ? (
          <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
            <Item skeleton='true'>
              <Skeleton height='40vh' />
            </Item>
            <Item skeleton='true'>
              <Skeleton height='40vh' />
            </Item>
            <Item skeleton='true'>
              <Skeleton height='40vh' />
            </Item>
          </SkeletonTheme>
        ) : news && news.map((item) => <Item><NewsCard {...item} /></Item>)
      }
    </List>
  );
};
