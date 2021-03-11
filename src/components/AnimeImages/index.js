import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { BASE_URL } from '../../urls/url';
import { BASE_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

import { CorouselDiv, List, Item } from './styles';

export const AnimeImages = ({ id }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/animeImages/${id}`)
      .then((res) => res.json())
      .then((images) => {
        setImages(images);
        setLoading(false);
      });

  }, []);

  return (
    <CorouselDiv>
      {
        loading ? (
          <List>
            <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
              <Item skeleton='true'>
                <Skeleton width={210} height={320} />
              </Item>
            </SkeletonTheme>
            <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
              <Item skeleton='true'>
                <Skeleton width={210} height={320} />
              </Item>
            </SkeletonTheme>
            <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
              <Item skeleton='true'>
                <Skeleton width={210} height={320} />
              </Item>
            </SkeletonTheme>
            <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
              <Item skeleton='true'>
                <Skeleton width={210} height={320} />
              </Item>
            </SkeletonTheme>
          </List>
        ) : (
          <List>
            {
              images.map((img) => (

                <Item key={img.id}>

                  <img alt='' src={img.imageLink} />

                </Item>

              ))
            }
          </List>
        )
      }
    </CorouselDiv>
  );
};
