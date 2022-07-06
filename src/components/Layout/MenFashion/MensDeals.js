import React from 'react';
import { NavLink } from 'react-router-dom';

const DUMMY_DATA = [
  {
    img: 'https://k.nooncdn.com/cms/pages/20220623/85bdbb7383176c65805e29d6419b0fe0/en_dk_eg-cat-01.png',
    filter: 'sportswear',
  },
  {
    img: 'https://k.nooncdn.com/cms/pages/20220623/85bdbb7383176c65805e29d6419b0fe0/en_dk_eg-cat-02.png',
    filter: 'shirts',
  },
  {
    img: 'https://k.nooncdn.com/cms/pages/20220623/85bdbb7383176c65805e29d6419b0fe0/en_dk_eg-cat-03.png',
    filter: 'T-shirts & polo',
  },
  {
    img: 'https://k.nooncdn.com/cms/pages/20220623/85bdbb7383176c65805e29d6419b0fe0/en_dk_eg-cat-04.png',
    filter: 'footwear',
  },
  {
    img: 'https://k.nooncdn.com/cms/pages/20220623/85bdbb7383176c65805e29d6419b0fe0/en_dk_eg-cat-05.png',
    filter: 'bottoms',
  },
  {
    img: 'https://k.nooncdn.com/cms/pages/20220623/85bdbb7383176c65805e29d6419b0fe0/en_dk_eg-cat-06.png',
    filter: 'watches',
  },
  {
    img: 'https://k.nooncdn.com/cms/pages/20220623/85bdbb7383176c65805e29d6419b0fe0/en_dk_eg-cat-07.png',
    filter: 'eyewear',
  },
];

const DEALS = [
  {
    img: 'https://k.nooncdn.com/cms/pages/20220624/91a7d046a990a741f039b89f3e1b7962/en_dk_eg-mega-men-01.png',
    filter: 'T-shirts & polo',
  },
  {
    img: 'https://k.nooncdn.com/cms/pages/20220625/747dfbc0520cde46c6d4cf61fed6a579/en_dk_eg-mega-men-04.png',
    filter: 'bottoms',
  },
  {
    img: 'https://k.nooncdn.com/cms/pages/20220625/fcb91acd943d1a7b316f7120d5499b8a/en_dk_eg-mega-men-07.png',
    filter: 'footwear',
  },
  {
    img: 'https://k.nooncdn.com/cms/pages/20220624/91a7d046a990a741f039b89f3e1b7962/en_dk_eg-mega-men-04.png',
    filter: 'shirts',
  },
];
const title =
  'https://k.nooncdn.com/cms/pages/20220623/85bdbb7383176c65805e29d6419b0fe0/en_dk_eg-title-01.png';

const deals =
  'https://k.nooncdn.com/cms/pages/20220623/85bdbb7383176c65805e29d6419b0fe0/en_dk_eg-title-02.png';

const MensDeals = () => {
  return (
    <div>
      <div className="p-3">
        <img alt="..." className="img-fluid" src={title} />
      </div>

      <div className="row my-2 mx-auto justify-content-center ">
        {React.Children.toArray(
          DUMMY_DATA.map((obj) => {
            return (
              <NavLink
                to={`/filter-items/${obj.filter}`}
                className="m-1 w-auto"
              >
                <div>
                  <img alt="..." className="img-fluid" src={obj.img} />
                </div>
              </NavLink>
            );
          })
        )}
      </div>

      <div>
        <img alt="..." className="img-fluid" src={deals} />
      </div>

      <div className="row my-2 mx-auto justify-content-center ">
        {React.Children.toArray(
          DEALS.map((obj) => {
            return (
              <NavLink
                to={`/filter-items/${obj.filter}`}
                className="m-1 w-auto"
              >
                <div>
                  <img alt="..." className="img-fluid" src={obj.img} />
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MensDeals;
