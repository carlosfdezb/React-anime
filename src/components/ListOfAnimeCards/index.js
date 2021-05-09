import React, { useState, useEffect } from 'react';
import { MdLiveTv } from 'react-icons/md';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from '@reach/router';
import { List, Item, ListDiv, DivH1, DivEmoji, DivHeader, MoreDiv, MoreDivInt } from './styles';
import { AnimeCard } from '../AnimeCard';
import { BASE_URL } from '../../urls/url';
import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR } from '../../styles/DarkMode';

export const ListOfAnimeCards = ({ route, title }) => {
  const [categories, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.fetch(`${BASE_URL}/api/v1/${route}`)
      .then((res) => res.json())
      .then((categories) => {
        setCategoriesData(categories);
        setLoading(false);
      });
  }, []);

  return (
    <ListDiv>
      <DivHeader>
        <DivEmoji>
          <MdLiveTv color={BASE_COLOR} size='32px' />
        </DivEmoji>
        <DivH1>{title}</DivH1>

      </DivHeader>
      {
        loading ? (
          <List>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
            <Item skeleton='true'>
              <SkeletonTheme color={SECONDARY_COLOR} highlightColor={HIGH_COLOR}>
                <Skeleton width={210} height={320} />
              </SkeletonTheme>
            </Item>
          </List>
        ) : (
          <List>
            {
              categories.map((category) => <Item key={category.id}><AnimeCard {...category} sectionHome={title} /></Item>)
            }
            {
              title === 'En Emisión' && (
                <Item>
                  <Link to='/releases'>
                    <MoreDiv>
                      <MoreDivInt>
                        <FaPlusCircle size='64px' color='white' />
                      </MoreDivInt>
                    </MoreDiv>
                  </Link>
                </Item>
              )
            }

          </List>
        )
      }

    </ListDiv>
  );
};

