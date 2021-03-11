/* eslint-disable camelcase */
import React from 'react';
import { Link } from '@reach/router';
import { BsHeartFill } from 'react-icons/bs';
import { reactLocalStorage } from 'reactjs-localstorage';
import { DivBox, DivTitle, HeartDiv } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';

export const PremiereEpisodeCard = ({ id, title, episode, poster }) => {
  const [isNear, fromRef] = useNearScreen();

  const ide = id.replace('anime/', '').replace(`-${episode}`, '');
  const match = poster.match(/(\d+).jpg/);
  const favs = reactLocalStorage.getObject('favs');
  const ideFav = `anime/${id.replace(`-${episode}`, '')}`;
  return (
    <article ref={fromRef}>
      {
        isNear && (
          <Link to={`/watch/${ide}/${episode}/${episode}`}>
            <DivBox cover={`https://cdn.animeflv.net/screenshots/${match[1]}/${episode}/th_3.jpg`}>
              <DivTitle>
                <h1>{title}</h1>
                {
                  episode && (
                    <h2>
                      Episodio
                      {' '}
                      {episode}
                    </h2>
                  )
                }

              </DivTitle>
              {
                Object.entries(favs).length !== 0 && favs.map((fav) => (fav.id === ideFav ? (
                  <HeartDiv>
                    <BsHeartFill color='white' size={18} />
                  </HeartDiv>
                ) : ''))
              }

            </DivBox>
          </Link>
        )
      }
    </article>
  );
};
