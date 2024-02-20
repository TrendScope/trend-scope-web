import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { fadeIn, rotate, SlideDown, SlideUp } from "../_styled/animationStyled.jsx";

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
    z-index: 50;
`

export const SearchCategoryList = styled.div`
    background-color: white;
    border-radius: 12px;
    padding: 10px auto;
    color: #C0C5DC;
    font-size: 12px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 40px;
    padding: 0 2%;
`

export const SearchCheckedCategory = styled.div`
    border: none;
    border-radius: 12px;
    background-color: #65839D;
    color: #ffffff;
    padding: 0 3%;
    height: 24px;
    line-height: 24px;
    margin-right: 2%;
`

export const SearchCategoryMore = styled.div`
    font-size: 12px;
    color: #65839D;
`

export const SearchCategoryCount = styled.div`
    border: none;
    border-radius: 100%;
    font-size: 12px;
    background-color: #65839D;
    color: #ffffff;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin-left: 2%;
`

export const SearchCategoryIcon = styled(FontAwesomeIcon)`
    width: 12px;
    margin-right: 3%;
    color: #264466;
    cursor: pointer;
    transition: transform 0.8s ease;
    &:active, &hover {
        animation: ${rotate} 0.8s ease;
    }
`

export const SearchCategoryModal = styled.div`
    z-index: 10;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 10px 5px;
    background-color: #F3F9FD;
    margin-top: -5px;
`

export const SearchCategoryBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SearchCategoryInput = styled.input`
    -webkit-appearance: none; /* Chrome, Safari, Edge */
    -moz-appearance: none; /* Firefox */
    appearance: none; /* 기타 브라우저 */

    margin: 10px;
    width: 16px;
    height: 16px;
    border: 1px solid #264466;
    background-color: #ffffff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;

    &:checked {
        background-color: #264466;
    }
`

export const SearchCategoryLabel = styled.label`
    
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