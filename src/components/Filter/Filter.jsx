import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter.reducer';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filterStore.filter);

  const filterChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={filter}
        onChange={filterChange}
      />
    </label>
  );
};
