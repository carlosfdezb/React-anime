import React from 'react';
import { FaFolderPlus } from 'react-icons/fa';
import { DivHeader, DivEmoji, DivH1, ListDiv, List, Item } from './styles';
import { categories } from '../../urls/categories.json';
import { CategoriesCard } from '../CategoriesCard';
import { BASE_COLOR } from '../../styles/DarkMode';

export const ListOfCategories = ({ title }) => {
  return (
    <ListDiv>
      <DivHeader>
        <DivEmoji>
          <FaFolderPlus color={BASE_COLOR} size='32px' />
        </DivEmoji>
        <DivH1>{title}</DivH1>

      </DivHeader>
      <List>
        {
          categories.map((cat) => (
            <Item key={cat.value}>
              <CategoriesCard {...cat} />
            </Item>
          ))
        }
      </List>
    </ListDiv>

  );
};
