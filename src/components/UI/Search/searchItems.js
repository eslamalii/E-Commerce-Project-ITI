import { useParams } from 'react-router-dom';
import React from 'react';
import { DUMMY_DATA } from '../../Products/data';
import FilterItem from '../../Layout/FilterItems/FilterItem';

const SearchItems = () => {
  const filter = useParams();

  const FilterData = DUMMY_DATA.filter((obj) => {
    return obj.filter == filter.filterName;
  });

  const data = React.Children.toArray(
    FilterData.map((item) => {
      return <FilterItem {...item} />;
    })
  );
  return (
    <div className="container">
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {data}
      </div>
    </div>
  );
};

export default SearchItems;
