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