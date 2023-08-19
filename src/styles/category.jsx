import styled from "@emotion/styled";
import theme from "./config";

export const List = styled.div`
    label: List;
    gap: 3rem;
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`
export const Item = styled.div`
    label: Item;
    color: ${theme.primary};
    gap: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    background: linear-gradient(45deg, ${theme.background}, ${theme.textBackground}) ;
    padding: 1rem;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    justify-content: center;
    
    :active , :hover{
        background: linear-gradient(45deg, ${theme.secondary}, ${theme.white}) ;
    }
`