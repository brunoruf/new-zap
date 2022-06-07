import React, { useState } from "react";
import { StyledTab, StyledTabItem } from "./Tabs.style";

const tabItem = [
    {id: 1, category: 'Comprar'},
    {id: 2, category: 'Alugar'},
    {id: 3, category: 'Lançamentos'}
]


const Tab = () => {

    const [isActive, setIsActive] = useState(1);
    const ChangetoActive = (tabNumber) => {
        setIsActive(tabNumber)
    }
    
    return (
        <StyledTab>
            {tabItem.map((category) => (
                <StyledTabItem key={category.id} onClick={() => ChangetoActive(category.id)} className={isActive === category.id ? "active" : ""}>{category.category}</StyledTabItem>
            ))}
        </StyledTab>
    )
}

export default Tab;