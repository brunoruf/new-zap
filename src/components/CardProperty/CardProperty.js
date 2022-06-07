import React from "react";
import { CardPrice, CardPropertyWrapper } from "./CardProperty.style";
import TagColor, { TagOutlined  }from "../Tags/Tags";



const CardProperty = ({id, category, price, tag, thumb}) => {

    function numberWithCommas(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <CardPropertyWrapper propertythumb={thumb}>
            <TagColor category={category} />
            <div>
                <div>
                    <CardPrice>{numberWithCommas(price)}</CardPrice>
                    <div className="propertyTags">
                        <TagOutlined tag={tag} />
                        <TagOutlined tag='2 Q' />
                        <TagOutlined tag='1 B' />
                    </div>
                </div>
            </div>
        </CardPropertyWrapper>
    )
}

export default CardProperty;