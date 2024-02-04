import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div style={{ top: '50%', left: '50%' }} className={css.loader}>
      <InfinitySpin
        wrapperStyle={{ position: 'absolute', top: '50%', left: '50%' }}
        height="400"
        width="400"
        radius="148"
        color="#3f51b5"
        ariaLabel="loading"
        visible={true}
      />
    </div>
  );
};
