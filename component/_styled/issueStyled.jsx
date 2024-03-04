import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

// issue detail
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
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 2%;
    line-height: 150%;
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

export const IssueSubjectBox = styled.div`
    width: 90%;
    margin: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
`

export const IssueSubjectText = styled.div`
    border-radius: 65px;
    border: 1px solid #C0C5DC;
    min-height: 80px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2%;
    font-size: 16px;
`

export const IssueCategory = styled.div`
    border-radius: 8px;
    background-color: #65839D;
    color: #F6F7FE;
    margin: 1% 5%;
    padding: 2% 5%;
    font-size: 14px;
    font-weight: normal;
`

export const IssueIndicatorBox = styled.div`
    width: 100%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IssueInfoMore = styled(FontAwesomeIcon)`
    width: 10px;
    height: 10px;
    color: #7F85A3;
    cursor: pointer;
`

export const IssueIndicatorCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
`

export const CommunityBtn = styled.div`
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

// issue list
export const IssueSortIcon = styled(FontAwesomeIcon)`
    width: 12px;
    color: #2A2A3A;
`

// emerging issue
export const IssueInfoText = styled.div`
    text-align: center;
    font-size: 12px;
    color: #000000;
    margin: 5% 0;
    line-height: 175%;
`