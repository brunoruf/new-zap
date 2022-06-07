import styled from 'styled-components';

export const CardPropertyWrapper = styled.div`
    width: 250px;
    min-width: 250px ;
    height: 325px;
    border-radius: .4rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 64.62%, rgba(0, 0, 0, 0.8) 100%), url(${(props) => props.propertythumb});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    padding: .8rem ;
    transition: .15s ease-in-out;
    position: relative ;

    & > div {
        position: relative ;
    }

    & > div > div {
        position: relative ;
        bottom: 1rem ;
        margin-top: 100% ;
    }

    & .propertyTags > div {
        margin-right: .5rem;
        flex: none ;
    }

    &:hover {
        cursor: pointer;
    }

    `
    export const CardPrice = styled.h3`
        margin-bottom: .8rem;
        color: #FFF ;
        font-size: 1.5rem ;
        font-weight: 700 ;
    `