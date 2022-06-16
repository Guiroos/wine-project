import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bar, FlexDiv, StyleLink, IconDiv, ImageDiv } from "./style";
import { CgProfile, CgSearch, CgShoppingCart } from "react-icons/cg";
import wine from "../../../public/wine.svg";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
}

interface NavbarProps {
  cartItems?: Product[];
}

const Navbar: React.FC<NavbarProps> = ({ cartItems }: NavbarProps) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Bar id="navbar">
      <FlexDiv>
        <ImageDiv id="navbar-img">
          <Link href="/">
            <Image src={wine} alt="logo" width={60} height={60} layout="fixed"/>
          </Link>
        </ImageDiv>
        <FlexDiv>
          <Link href="/club">
            <StyleLink id="navbar-club">Clube</StyleLink>
          </Link>
          <Link href="/store">
            <StyleLink id="navbar-store">Loja</StyleLink>
          </Link>
          <Link href="/producers">
            <StyleLink id="navbar-producers">Produtores</StyleLink>
          </Link>
          <Link href="/promos">
            <StyleLink id="navbar-promos">Ofertas</StyleLink>
          </Link>
          <Link href="/events">
            <StyleLink id="navbar-events">Eventos</StyleLink>
          </Link>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv>
        <IconDiv id="navbar-search">
          <CgSearch size={50} />
        </IconDiv>
        <IconDiv id="navbar-profile">
          <CgProfile size={50} />
        </IconDiv>
        <Link href="/cart">
          <IconDiv id="navbar-cart" onClick={() => setShowCart(!showCart)}>
            <CgShoppingCart size={50} />
          </IconDiv>
        </Link>
      </FlexDiv>
    </Bar>
  );
};

export default Navbar;
