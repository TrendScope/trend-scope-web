import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CommuSearch = styled.div`
    color: #484A64;
    border: none;
    border-radius: 32px;
    background-color: #F3F9FD;
    padding: 10px 5%;
    font-size: 12px;
    width: 90%;
    margin: 5%;
    display: flex;
    flex-direction: row;
    gap: 2%;
    align-items: center;
`

export const CommuSearchIcon = styled(FontAwesomeIcon)`
    width: 12px;
    color: #95AEC2;
`

export const CommuSearchPlaceholder = styled.input`
    &::placeholder {
        color: #95AEC2; 
        border: none;
    }
    background-color: #F3F9FD;
    outline: none;
    border: none;
`

export const CommuTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 85%;
    margin: 0 7.5%;
    justify-content: space-between;
    align-items: center;
`

export const CommuSort = styled.div`
    display: flex;
    width: 40%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #2A2A3A;
`

export const CommuIcon = styled(FontAwesomeIcon)`
    width: 12px;
`

export const CommuWriteBtn = styled.div`
    border-radius: 8px;
    background-color: #264466;
    color: #FFFFFF;
    font-size: 12px;
    padding: 3% 5%;
`

export const CardLine = styled.div`
    width: 100%;
    display: block;
    border: 0.5px solid #C0C5DC;
    margin-bottom: 5%;
`

// create
export const CreateWrapper = styled.div`
    width: 90%;
    margin: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CreateText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #2A2A3A;
    margin: 5% 0;
`

export const CreateBtn = styled.div`
    cursor: pointer;
    background-color: ${(props)=>!props.selected?`#CEDEED`:`#264466`};
    transition: background-color 0.4s ease;
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

export const CreatePost = styled.div`
    width: 100%;
`