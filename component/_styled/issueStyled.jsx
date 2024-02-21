import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const IssueWrapper = styled.div`
    width: 100%;
    background-color: #F3F9FD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const IssueIcon = styled(FontAwesomeIcon)`
    width: 32px;
    height: 32px;
    color: #264466;
    margin: 10% 0;
`

export const IssueMessage = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #2A2A3A;
`

export const IssueMessage2 = styled.div`
    font-size: 14px;
    color: #7F85A3;
    margin: 5%;
`

export const IssueContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 12px 12px 0 0;
    width: 100%;
    padding: 5% 0;
`