import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { fadeIn } from "../_styled/animationStyled.jsx";

// SearchIssue
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    padding: 5px 5%;
`

export const SearchText = styled.span`
    font-size: 16px;
    font-weight: bold;
    margin: 3% 0;
`

export const SearchCategory = styled.div`
    background-color: #F3F9FD;
    border: none;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-wrap: nowrap;
    gap: 3%;
    justify-content: space-between;
    padding: 8px 5px;
`

export const SearchCategoryList = styled.div`
    background-color: white;
    border-radius: 12px;
    padding: 10px 3%;
    color: #C0C5DC;
    font-size: 12px;
    width: 90%;
`

export const SearchCategoryIcon = styled(FontAwesomeIcon)`
    width: 12px;
    margin-right: 3%;
    color: #264466;
    cursor: pointer;
`

export const SearchTheme = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 10px 0;
    gap: 3%;
`

export const SearchThemePlaceholder = styled.input`
    &::placeholder {
        color: #C0C5DC; 
        border: none;
    }
    color: #484A64;
    border: none;
    border-radius: 8px;
    outline: none;
    background-color: #F3F9FD;
    padding: 10px 5%;
    font-size: 12px;
    width: 90%;
`

export const SearchThemeBtn = styled.button`
    background-color: ${(props)=>(props.isactive==='true'?'#264466':'#DEEBF3')};
    color: ${(props)=>(props.isactive==='true'?'#ffffff':'#95AEC2')};
    cursor: ${(props)=>(props.isactive==='true'?'pointer':'')};
    border: none;
    border-radius: 8px;
    height: 40px;
    width: 40px;
    transition: background-color 0.5s ease, color 0.5s ease; 
    animation: ${fadeIn} 0.5s ease;
`

export const SearchThemeBtnFont = styled(FontAwesomeIcon)`
    width: 12px;
`