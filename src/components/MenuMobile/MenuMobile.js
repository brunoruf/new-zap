import React, {useState} from "react";
import { StyledMenuMobile, StyledMenuMobileOpen, CloseIcon } from "./MenuMobile.style";
import MenuIcon from "../../Assets/Images/Icons/ico-menu-white.svg"
import UserIcon from "../../Assets/Images/Icons/ico-user-white.svg"



const MenuMobile = () => {
    const [menuMobile, setMenuMobile] = useState('menuMobile');

    
    function handleMenuMobileOpen() {
        setMenuMobile('menuMobile active');
    }
    
    function handleMenuMobileClose() {
        setMenuMobile('menuMobile');
    }

    return (
        <>
        <StyledMenuMobileOpen className={menuMobile}>
            <p>wiuheiwuahe</p>
            <CloseIcon onClick={handleMenuMobileClose}>
                <p>X</p>
            </CloseIcon>
            <nav>
                <a href="#dawd">Zaz</a>
            </nav>
        </StyledMenuMobileOpen>
        <StyledMenuMobile>
            <img src={MenuIcon} alt="Menu" onClick={handleMenuMobileOpen} />
            <img src={UserIcon} alt="Menu" />
        </StyledMenuMobile>
        </>
    )
};

export default MenuMobile;