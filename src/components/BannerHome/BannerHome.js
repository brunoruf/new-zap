import React from "react";
import StyledBannerHome from "./BannerHome.style";
import HeaderHome from "../Header/Header";
import SearchTabFilter from "../SearchTabFilter/SearchTabFilter";
import logo from "../../../src/Assets/Images/logo-color-white.png"
import MenuMobile from "../MenuMobile/MenuMobile";

const BannerHome = () => {


    return (
        <StyledBannerHome>
            <HeaderHome/>
            <section>
                <div>
                    <img src={logo} alt="Logo Zap" />
                    <h2>É nosso papel encontrar o imóvel perfeito para você.</h2>
                    <div>
                    <SearchTabFilter />
                    </div>
                </div>
            </section>
        </StyledBannerHome>
    )
}

export default BannerHome;