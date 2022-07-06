import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import Product from './Product';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';
import React from 'react';

const DUMMY_DATA = [
  {
    id: 1,
    img: 'https://z.nooncdn.com/products/tr:n-t_240/v1654875072/N46458528A_1.jpg',
    title: '55-Inch Crystal UHD 4K Flat Smart TV UA55AU7000 Titan Grey',
    price: '9025.00',
    rate: 4.8,
  },
  {
    id: 2,
    img: 'https://z.nooncdn.com/products/tr:n-t_240/v1633343876/N42342017A_1.jpg',
    title:
      'PlayStation 5 Console (Disc Version) With Extra Wireless Controller - International Version',
    price: '18999.00',
    rate: 4.8,
  },
  {
    id: 3,
    img: 'https://z.nooncdn.com/products/tr:n-t_240/v1654698334/N47626990A_1.jpg',
    title: 'AirPods Pro With MagSafe Charging Case White',
    price: '4384.00',
    rate: 4.3,
  },
  {
    id: 4,
    img: 'https://z.nooncdn.com/products/tr:n-t_240/v1653304140/N51220172A_1.jpg',
    title: 'Watch Series 7 GPS 45mm Aluminium Case With Sport Band Abyss Blue',
    price: '9274.00',
    rate: 4.8,
  },
  {
    id: 5,
    img: 'https://z.nooncdn.com/products/tr:n-t_240/v1655898686/N18879478A_1.jpg',
    title: '32-Inch HD LED TV 32 Black',
    price: '2399.00',
    rate: 4.6,
  },
  {
    id: 6,
    img: 'https://z.nooncdn.com/products/tr:n-t_240/v1646561507/N51546292A_1.jpg',
    title:
      'Elements SE 480 GB SSD - External SSD, up to 400MB/s read speeds, 2-meter Drop Resistance 480 GB',
    price: '999.00',
    rate: 5.0,
  },
  {
    id: 7,
    img: 'https://z.nooncdn.com/products/tr:n-t_240/v1655474959/N29185111A_1.jpg',
    title: 'Steam Iron 2200W TST-2200 Assorted',
    price: '559.00',
    rate: 4.5,
  },
  {
    id: 8,
    img: 'https://z.nooncdn.com/products/tr:n-t_240/v1641963226/N11200553A_1.jpg',
    title: 'Euphoria Women EDP 100ml',
    price: '998.95',
    rate: 4.6,
  },
];

const ProductsList = (props) => {
  return (
    <div className="p-2">
      <div className="mx-3">
        <strong className="fs-3">Hot Deals</strong>
      </div>
      <div className="px-2">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
          }}
        >
          {React.Children.toArray(
            DUMMY_DATA.map((item, index) => {
              return (
                <SwiperSlide virtualIndex={index}>
                  <NavLink
                    to={`/product/${item.id}`}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            textDecoration: 'none',
                            color: 'black',
                          }
                        : {
                            textDecoration: 'none',
                            color: 'black',
                          }
                    }
                  >
                    <Product
                      img={item.img}
                      price={item.price}
                      title={item.title}
                    />
                  </NavLink>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsList;
