import React from "react";
import FormIcon from "../Forms/Forms";
import { StyledSearchTabFilter } from "./SearchTabFilter.style";
import Tab from "../Tabs/Tabs";

const SearchTabFilter = () => {
    return (
        <>
        <StyledSearchTabFilter>
            <Tab />
            <FormIcon />
        </StyledSearchTabFilter>
        </>
    )
}

export default SearchTabFilter