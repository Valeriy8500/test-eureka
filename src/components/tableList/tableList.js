import React from 'react';

import { headingsItems } from '../../utils/utils';

import actionButton from './action_button.svg';
import deleteButton from './delete_button.svg'

import './tableList.css';

const TableList = ({ info }) => {

  const InfoRow = () => {
    return info.map((item) => {
      return (
        <li className='main-content__item' key={item.login}>
          <span className='main-content__item-el'>{item.secondName}</span>
          <span className='main-content__item-el'>{item.name}</span>
          <span className='main-content__item-el'>{item.middleName}</span>
          <span className='main-content__item-el'>{item.email}</span>
          <span className='main-content__item-el'>{item.login}</span>
          <div className='main-content__buttons-block'>
            <img className='main-content__info-button' src={actionButton} alt='карандаш' />
            <img className='main-content__info-button' src={deleteButton} alt='корзина' />
          </div>
        </li>
      )
    });
  };

  const renderInfoRow = InfoRow();

  return (
    <ul className='main-content__table-list'>
      <li className='main-content__item'>
        {headingsItems.map((item) => <span className='main-content__item-el' key={item}>{item}</span>)}
      </li>
      {renderInfoRow}
    </ul>
  )
};

export default TableList;