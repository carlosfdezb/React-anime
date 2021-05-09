import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { AnimeCard } from '../AnimeCard';
import { ReleaseBox, ReleaseH1, List, Item, ListDesktop } from './styles';
import { BASE_URL } from '../../urls/url';
import { BASE_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const ListOfReleases = () => {
  const [releases, setRelease] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/releases`)
      .then((res) => res.json())
      .then((n) => {
        setRelease(n.releases);
        setLoading(false);
      });
  }, []);
  console.log(releases);
  return (
    <ReleaseBox>
      <ReleaseH1>En Emisión</ReleaseH1>
      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width='40vw' height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width='40vw' height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width='40vw' height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width='40vw' height={230} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (
          <List>
            {
              releases.map((release) => <Item><AnimeCard {...release} searchSize='true' /></Item>)
            }
          </List>
        )
      }
    </ReleaseBox>
  );
};

export const ListOfReleasesDesktop = () => {
  const [releases, setRelease] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/releases`)
      .then((res) => res.json())
      .then((n) => {
        setRelease(n.releases);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width='40vw' height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width='40vw' height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width='40vw' height={230} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={BASE_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width='40vw' height={230} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (
          <ListDesktop>
            {
              releases.map((release) => <Item><AnimeCard {...release} searchSize='true' /></Item>)
            }
          </ListDesktop>
        )
      }
    </>
  );
};
