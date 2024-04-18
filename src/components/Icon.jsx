import sprite from '../img/sprite.svg';

import React from 'react';

export const Icon = ({ width, height, iconid }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${iconid}`}></use>
    </svg>
  );
};