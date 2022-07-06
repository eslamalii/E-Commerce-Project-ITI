import CartButton from './CartButton/CartButton';
import classes from './SwiperStyle.css';
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';
import { BsShop } from 'react-icons/bs';

const Header = () => {
  return (
    // <Fragment>
    //   <header className="h-20 bg-primary d-flex justify-content-between p-1">
    //     <h1 className="text-white fw-bold align-self-center my-auto mx-2">
    //       Shopping
    //     </h1>
    //     <div className="my-auto mx-3">
    //       <CartButton />
    //     </div>
    //   </header>
    // </Fragment>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/product">
          <BsShop className="my-auto" /> Shopping
        </Navbar.Brand>
        <Nav.Link className={classes['nav-link']} href="/product">
          Home
        </Nav.Link>

        <Nav>
          <NavItem>
            <CartButton />
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
