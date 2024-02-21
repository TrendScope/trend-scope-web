import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MainContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`

export const MainIssueBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 5%;
`

export const MainIssueBtn = styled.button`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3% 0;
    border: 1px solid #DEEBF3;
    border-radius: 6px;
    background-color: #F3F9FD;
    color: #2A2A3A;
    cursor: pointer;
`

export const MainIssueIcon = styled(FontAwesomeIcon)`
    width: 20px;
    margin-bottom: 5%;
`

export const MainIssueText = styled.span`
    font-size: 16px;
    font-weight: bold;
`