import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { AnimeCard } from '../AnimeCard';
import { FavBox, FavH1, List, Item, ListDesktop } from './styles';

export const ListOfFavs = () => {
  const favs = reactLocalStorage.getObject('favs');

  return (
    <FavBox>
      <FavH1>Favoritos</FavH1>
      <List>
        {
          Object.entries(favs).length !== 0 ? favs.map((fav) => (
            <Item>
              <AnimeCard {...fav} searchSize='true' />
            </Item>
          )) : ''
        }
      </List>
    </FavBox>
  );
};

export const ListOfFavsDesktop = () => {
  const favs = reactLocalStorage.getObject('favs');

  return (

    <ListDesktop>
      {
        Object.entries(favs).length !== 0 ? favs.map((fav) => (
          <Item>
            <AnimeCard {...fav} searchSize='true' />
          </Item>
        )) : ''
      }
    </ListDesktop>
  );
};
