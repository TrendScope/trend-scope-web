import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardContainer = styled.div`
    background-color: #F3F9FD;
    border: none;
    border-radius: 4px;
    width: 40%;
    margin: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`

export const CardTitle = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 5%;
    align-items: center;
`

export const CardIcon = styled(Image)`
    width: 34px;
    height: 34px;
`

export const CardText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #2A2A3A;
`

export const CardPercent = styled.div`
    border-radius: 100%;
    border: none;
    background: ${(props)=>props.percent && `conic-gradient(#264466 ${props.percent}%, #FFFFFF 0%)`};
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10% 0;
`

export const CardPercentInner = styled.div`
    border-radius: 100%;
    border: none;
    background-color: #F3F9FD;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    width: 40px;
    height: 40px;
`

export const CardPercentRage = styled.div`
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-content: flex-end;
    gap: 2%;
    width: 100%;
    color: ${(props)=>props.avg>0?'#43B446':'#D92844'};
`

export const CardPercentIcon = styled(FontAwesomeIcon)`
    width: 10px;
`

// Modal
export const ModalWrapper = styled.div`
    position: absolute;
    width: 300px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #F3F9FD;
    border-radius: 16px;
    border: #BCCFDE solid 1px;
    margin-top: -200px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    
    &::after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 15px 15px 0;
        border-color: #F3F9FD transparent;
        display: block;
        width: 0;
        z-index: 1;
        margin-left: -15px;
        bottom: -15px;
        left: 50%;
    }

    &::before {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 15px 15px 0;
        border-color: #BCCFDE transparent;
        display: block;
        width: 0;
        z-index: 0;
        margin-left: -15px;
        bottom: -16px;
        left: 50%;
    }
`

export const ModalText = styled.div`
    font-size: 10px;
    color: #7F85A3;
    font-weight: normal;
    text-align: center;
`

// issue card
export const IssueCardWrapper = styled.div`
    background-color: #F3F9FD;
    width: 90%;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 5%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    cursor: pointer;
`

export const IssueCardDate = styled.div`
    font-size: 10px;
    color: #7F85A3;
    margin-bottom: 2%;
`

export const IssueCardSubject = styled.div`
    border-radius: 12px;
    border: none;
    background-color: #264466;
    color: #FFFFFF;
    margin-bottom: 2%;
    padding: 2% 5%;
    font-size: 10px;
`

export const IssueCardKeyword = styled.div`
    font-size: 14px;
    color: #2A2A3A;
`

export const IssueCategoryBox = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 2% 0;
`

export const IssueFactorBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5%;
`

export const IssueFactor = styled.div`
    background-color: #FFFFFF;
    border-radius: 24px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    flex-direction: row;
    color: #2A2A3A;
    width: 25%;
    padding: 1%;
`

export const IssueFactorPercent = styled.div`
    font-size: 14px;
`

export const IssueDropdownWrappepr = styled.div`
    border-radius: 12px;
    border: 1px solid #C0C5DC;
    background-color: #FFFFFF;
    text-align: center;
    width: 60%;
    position: absolute;
    right: 10%;
    margin-top: 3%;
`

export const IssueDropdownTop = styled.div`
    font-size: 14px;
    color: #7F85A3;
    width: 100%;
    padding: 4%;
`

export const IssueDropdownType = styled.div`
    font-size: 14px;
    color: ${(props)=>props.isselected==='true'?'#FFFFFF':'#2A2A3A'};
    background-color: ${(props)=>props.isselected==='true'?'#264466':'transperate'};
    border-radius: 10px;
    padding: 4%;
    transition: background-color 0.4s ease;
`