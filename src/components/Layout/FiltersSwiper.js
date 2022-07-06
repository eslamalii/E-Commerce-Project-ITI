import ItemFilter from './ItemFilter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';

const DUMMY_DATA = [
  {
    id: 1,
    img: 'https://k.nooncdn.com/cms/pages/20220522/1667494b266b1fbfd26e16c707e86dbe/en_category.png',
    filter: 'The Beauty Festival',
  },
  {
    id: 2,
    img: 'https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-01.png',
    filter: 'baby',
  },
  {
    id: 3,
    img: 'https://k.nooncdn.com/cms/pages/20211206/87a4787dc31786070d29f3c8f0835684/en_CBs-11.png',
    filter: 'Grocery',
  },
  {
    id: 4,
    img: 'https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-02.png',
    filter: "Men's Fashion",
  },
  {
    id: 5,
    img: 'https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-03.png',
    filter: "Women's Fashion",
  },
  {
    id: 6,
    img: 'https://k.nooncdn.com/cms/pages/20211207/6e25cd25b74d0c293d24014c15cc0bbc/en_CBs-10.png',
    filter: 'Home & Kitchen',
  },
  {
    id: 7,
    img: 'https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-04.png',
    filter: 'Mobile',
  },
  {
    id: 8,
    img: 'https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-05.png',
    filter: 'Electronics',
  },
  {
    id: 9,
    img: 'https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-06.png',
    filter: 'Televisions',
  },
  {
    id: 10,
    img: 'https://k.nooncdn.com/cms/pages/20211206/d0c75d40c77381b43e180d4d63d534b5/en_CBs-07.png',
    filter: 'Laptops',
  },
  {
    id: 11,
    img: 'https://k.nooncdn.com/cms/pages/20211209/041000ae232391742c9d18f326246311/en_CBs-13.png',
    filter: 'Fragrances',
  },
  {
    id: 12,
    img: 'https://k.nooncdn.com/cms/pages/20220519/1ec88c2d9f5ac94388b0ed4e8bcd6c0f/en_CBs-09.png',
    filter: 'Appliances',
  },
  {
    id: 13,
    img: 'https://k.nooncdn.com/cms/pages/20220608/065ad7f82f5f7ac798cff386b9862f1d/en_CBs-18.png',
    filter: 'Sports',
  },
  {
    id: 14,
    img: 'https://k.nooncdn.com/cms/pages/20220608/065ad7f82f5f7ac798cff386b9862f1d/en_CBs-19.png',
    filter: 'Automotive',
  },
];

const FiltersSwiper = () => {
  return (
    <div className="py-3 mx-3">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },

          768: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 10,
            spaceBetween: 60,
          },
        }}
      >
        {DUMMY_DATA.map((item, index) => {
          return (
            <SwiperSlide key={item.id} virtualIndex={index}>
              <NavLink to={`/filter-items/${item.filter}`}>
                <ItemFilter img={item.img} filter={item.filter} />
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FiltersSwiper;
