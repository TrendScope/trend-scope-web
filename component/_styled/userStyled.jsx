import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const userWrapper = styled.div`
    width: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
`

export const userSection = styled.div`
    
`

export const userSign = styled.div`
    color: #2A2A3A;
    font-size: 20px;
    font-weight: bold;
    margin: 5% 0;
`

export const userLabel = styled.div`
    font-weight: bold;
    font-size: 16px;
    color: #2A2A3A;
    margin-top: 10%;
`

export const userPlaceholder = styled.input`
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
    margin: 5% 0;
`

export const userAlarm = styled.div`
    font-size: 10px;
    color: #C0C5DC;
    /* #264466 #D92844*/
    display: flex;
    align-items: center;
    gap: 2%;
`

export const userAlarmIcon = styled(FontAwesomeIcon)`
    width: 14px;
`

export const userBtn = styled.div`
    cursor: pointer;
    background-color: #264466;
    border: none;
    border-radius: 8px;
    width: 90%;
    margin: 0 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 14px;
    padding: 3%;
`

export const userFooterAlram = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 2%;
    margin: 2% 0;
`

export const userFooterLeft = styled.div`
    color: #7F85A3;
`

export const userFooterRight = styled.div`
    color: #000000;
    cursor: pointer;
`