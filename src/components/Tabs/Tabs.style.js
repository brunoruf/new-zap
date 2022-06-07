import styled from 'styled-components';

export const StyledTab = styled.ul`
    width: 100%;
    display: flex;
`

export const StyledTabItem = styled.li`
        margin: 1rem 1rem .5rem 0;
        padding-bottom: .3rem;
        border-bottom: 2px solid rgba(255, 255, 255, 0);
        cursor: pointer;
        text-transform: uppercase ;
        opacity: .5 ;

        &.active {
        border-bottom: 2px solid #FF5E00;
        padding-bottom: .3rem;
        transition: .3s ease-in-out;
        opacity: 1 ;
    }
`