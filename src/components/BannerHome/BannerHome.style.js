import styled from 'styled-components';
import BannerHomeImage from '../../Assets/Images/Banners/BannerHome1.jpg';

const StyledBannerHome = styled.div`
    width: 100vw;
    height: 350px;
    background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.75)), url(${BannerHomeImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    text-align: center;

    & > section {
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
    }
    & > section > div > h2 {
        font-size: 20px ;
        margin: 1rem 0 2rem 0;
        line-height: 1.5rem;
        color: #FFF;
        text-align: center;
    }
`;

export default StyledBannerHome;