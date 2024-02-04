import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter.reducer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Імпортуємо стилі Bootstrap

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterStore.filter);

  const filterChange = (evt) => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className="mb-3">
      <label htmlFor="filter" className="form-label">
        Search contacts
      </label>
      <input
        type="text"
        id="filter"
        name="filter"
        placeholder="Search contacts"
        value={filter}
        onChange={filterChange}
        className="form-control"
      />
    </div>
  );
};
