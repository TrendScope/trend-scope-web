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

export const MainText = styled.span`
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
    padding: 10px 0;
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
    padding: 0 12px;
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

// Issue History
export const HistoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    padding: 5px 5%;
`

export const HistoryMore = styled.div`
    margin: 3% 0;
    text-align: right;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HistoryMoreIcon = styled(FontAwesomeIcon)`
    height: 12px;
    margin-left: 5px;
    cursor: pointer;
`

export const HistoryCardSlide = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    
    ::-webkit-scrollbar {
        width: 2px;
        height: 2px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 2px;
    }
`

export const HistoryCard = styled.div`
    background-color: #CEDEED;
    border-radius: 8px;
    border: 1px solid #BCCFDE;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 210px;
    margin-right: 5%;
    padding: 5%;
    cursor: pointer;
`

export const HistoryCardTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const HistoryCardText = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const HistoryCardDate = styled.div`
    font-size: 14px;
    color: #7F85A3;
    margin-bottom: 5%;
`

export const HistoryCardTheme = styled.div`
    font-size: 14px;
    color: #2A2A3A;
`

export const HistoryCardPercent = styled.div`
    background: ${(props)=>props.percent && `conic-gradient(#264466 ${props.percent}%, #F3F9FD 0%)`};
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HistoryCardPercentInner = styled.div`
    background-color: #264466;
    color: #FFFFFF;
    border: 1px solid #F3F9FD;
    border-radius: 100%;
    font-size: 10px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HistoryCardCategoryBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
    margin-top: 10%;
    font-size: 12px;
    align-items: center;
    gap: 2%;
    white-space: nowrap;
`