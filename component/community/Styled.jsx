import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2% 0;
    cursor: pointer;
`

export const CardLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`

export const CardIssue = styled.div`
    background-color: #264466;
    color: #FFFFFF;
    font-size: 10px;
    border: none;
    border-radius: 20px;
    width: fit-content;
    padding: 3% 7%;
`

export const CardTitle = styled.div`
    font-size: 12px;
    margin: 3% 0;
`

export const CardContent = styled.div`
    font-size: 10px;
    color: #2A2A3A;
`

export const CardAuthor = styled.div`
    font-size: 10px;
    color: #7F85A3;
    margin: 3% 0;
`

export const CardRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    align-items: flex-end;
    justify-content: space-evenly;
`

export const CardLike = styled(FontAwesomeIcon)`
    border: 1px solid #DEEBF3;
    border-radius: 8px;
    background-color: #F3F9FD;
    color: #264466;
    width: 90%;
    padding: 20%;
`

export const CardLikeCount = styled.div`
    font-size: 10px;
    color: #95AEC2;
    width: 90%;
    text-align: center;
`

export const CardDate = styled.div`
    font-size: 10px;
    color: #7F85A3;
`