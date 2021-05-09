import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { List, Item, ListDiv } from './styles';
import { AnimeCard } from '../AnimeCard';
import { BASE_URL } from '../../urls/url';

export const ListOfSearch = ({ query }) => {
  const [categories, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect((query) => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/Search/${query}`)
      .then((res) => res.json())
      .then((categories) => {
        setCategoriesData(categories.search);
        setLoading(false);
      });
  }, []);

  return (
    <ListDiv>

      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color='#673AB7' highlightColor='#512DA8'>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color='#673AB7' highlightColor='#512DA8'>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (
          <List>
            {
              (categories && categories.map((category) => <Item key={category.id}><AnimeCard {...category} searchSize='true' /></Item>))
            }
          </List>
        )

      }

    </ListDiv>
  );
};
