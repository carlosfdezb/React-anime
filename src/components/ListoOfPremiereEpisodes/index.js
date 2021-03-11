import React, { useState, useEffect } from 'react';
import { BsFillClockFill } from 'react-icons/bs';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { List, Item, ListDiv, DivH1, DivEmoji, DivHeader } from './styles';
import { PremiereEpisodeCard } from '../PremiereEpisodeCard';
import { BASE_URL } from '../../urls/url';
import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const ListOfPremiereEpisodes = ({ title }) => {
  const [categories, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      window.fetch(`${BASE_URL}/api/v1/LatestEpisodesAdded`)
        .then((res) => res.json())
        .then((fil1) => {
          setCategoriesData(fil1.episodes);
          setLoading(false);
        });
    }, 200);

  }, []);
  return (
    <ListDiv>
      <DivHeader>
        <DivEmoji>
          <BsFillClockFill color={BASE_COLOR} size='32px' />
        </DivEmoji>
        <DivH1>{title}</DivH1>

      </DivHeader>
      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={260} height={150} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={260} height={150} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={260} height={150} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (

          <List>

            {
              categories.map((category) => (<Item key={category.id}><PremiereEpisodeCard {...category} sectionHome={title} id={category.id} onFocus={() => setSelected(category)} /></Item>))
            }

          </List>
        )
      }

    </ListDiv>
  );
};
