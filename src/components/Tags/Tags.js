import React from "react";
import { TagColorStyled, TagOutlinedStyled } from "./Tags.style";


const TagColor = ({category}) => {
    return (
        <TagColorStyled style={category === "SALE" ? {background: "#41D1C9"} : {background: "#B3D84C"}}>{category}</TagColorStyled>
    )
}

const TagOutlined = ({tag}) => {
    return (
        <TagOutlinedStyled>{tag}</TagOutlinedStyled>
    )
}


export default TagColor;
export {TagOutlined};
