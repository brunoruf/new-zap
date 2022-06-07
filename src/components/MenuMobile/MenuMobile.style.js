import styled from "styled-components";

export const StyledMenuMobileOpen = styled.section`
    &.menuMobile {
    position: absolute ;
    top: 0 ;
    left: 0 ;
    z-index: 3 ;
    opacity: 0.5 ;
    background: red ;
    height: 100% ;
    width: 100%;
    overflow: hidden ;
    opacity: 0;
    margin: 0;
    display: none;
    }

    &.active {
        display: block ;
        opacity: 1 ;
    }
`;

export const StyledMenuMobile = styled.div`
    width: 100%;
    height: 3rem ;
    color: #FFF;
    display: flex ;
    justify-content: space-between;
    align-items: center ;
    box-sizing: border-box;
    padding: 1.8rem 1rem;

    & > img {
        width: 24px;
        cursor: pointer;
    }
`

export const CloseIcon = styled.div`
    width: 30px ;
    height: 30px ;
    background: #ccc ;
    position: fixed ;
    right: 0 ;
    top: 0 ;
    margin: 1rem ;
    text-align: center ;
    line-height: 30px ;
    cursor: pointer;
`