import sprite from '../img/sprite.svg';

import React from 'react';

export const Icon = ({ width, height, iconid, fill }) => {
  return (
    <svg width={width} height={height} fill={fill}>
      <use href={`${sprite}#${iconid}`}></use>
    </svg>
  );
};