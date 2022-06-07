import React, { useState, useEffect, useRef } from "react";
import BannerHome from "./components/BannerHome/BannerHome";
import { GlobalStyles } from './GlobalStyles';
import styled from 'styled-components'
import CardProperty from "./components/CardProperty/CardProperty";

const StaredHome = styled.section`
  margin: 0 1rem;
  margin-top: .8rem;
  position: relative ;


  & .propertiescarousel {
    display: flex ;
    margin-top: 1rem ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    overflow-x: auto ;
    overflow-y: hidden ;
    scroll-behavior: smooth;
  }

  & .propertiescarousel::-webkit-scrollbar {
    display: none ;
  }

  & > div.titleControllers{
    width: 100vw ;
    display: flex ;
    margin-top: 1rem ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
  }

  & > div > div {
    margin-right: .6rem ;
  }

  & div.titleControllers > h2 {
    font-size: 1.25rem ;
    font-weight: 500;
  }

  & .controllerWrapper {
    display: flex ;
    margin-right: 1.8rem ;
  }

  & .controllerWrapper > button {
    margin-right: .3rem ;
    width: 32px;
    height: 32px ;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }

  & .controllerWrapper > button:last-child {
    margin-right: 0;
  }
`

const url = "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json"


function App() {
  const [properties, setProperties] = useState([]);
  const carousel = useRef(null);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProperties(data)
    }
  fetchData();
  }, [])
  
  const propertiesHome = properties.slice(0,10)

  const handleLeftClick = (event) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (event) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }


  

  return (
    <>
    <GlobalStyles />
      <BannerHome />
    <StaredHome>
      <div className="titleControllers">
         <h2>Para você comprar</h2>
         <div className="controllerWrapper">
            <button id="swipeCarouselLeft" onClick={handleLeftClick}>{'<'}</button>
            <button onClick={handleRightClick}>{'>'}</button>
         </div>
      </div>
      <div className="propertiescarousel" ref={carousel}>
        {propertiesHome.map((property) => (
          <CardProperty 
            key={property.id}
            category={property.pricingInfos.businessType}
            price={Number(property.pricingInfos.price).toUpperCase()}
            tag={property.usableAreas + ' m²'}
            thumb={property.images[4]}
            />
            ))
          }   
      </div>
      
    </StaredHome>
    </>
  );
}

export default App;
