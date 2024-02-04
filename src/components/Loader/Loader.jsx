import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin
        height="400"
        width="400"
        radius="148"
        color="#3f51b5"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
