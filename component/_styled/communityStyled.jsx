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

export const CommuList = styled.div`
    width: 100%;
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

// write
export const WriteLabel = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: #7F85A3;
`

export const WriteTitle = styled.input`
    &::placeholder {
        color: #C0C5DC; 
        border: none;
    }
    color: #484A64;
    border: 1px solid #CEDEED;
    border-radius: 32px;
    outline: none;
    background-color: #F3F9FD;
    padding: 10px 10%;
    font-size: 12px;
    width: 90%;
    margin: 5%;
`

export const WriteTextarea = styled.textarea`
     &::placeholder {
        color: #C0C5DC; 
        border: none;
    }
    color: #484A64;
    border: 1px solid #CEDEED;
    border-radius: 8px;
    outline: none;
    background-color: #F3F9FD;
    padding: 10px 10%;
    font-size: 12px;
    width: 90%;
    margin: 5%;
    min-height: 40vh;
`

export const WriteBtnBox = styled.div`
    width: 90%;
    margin: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`

export const WriteBackBtn = styled.div`
    border-radius: 8px;
    border: none;
    background-color: #264466;
    color: #FFFFFF;
    width: 45%;
    padding: 5%;
`

export const WriteSubmitBtn = styled.div`
    border-radius: 8px;
    border: none;
    background-color: ${(props)=>props.$active?`#264466`:`#CEDEED`};
    transition: background-color 0.4s ease;
    color: #FFFFFF;
    width: 45%;
    padding: 5%;
`

// detail
export const DetailWrapper = styled.div`
    width: 90%;
    margin: 5%;
`

export const DetailTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5% 0;
    border-bottom: 1px solid #C0C5DC;
`

export const DetailInfo = styled.div`
    width: 90%;
    font-size: 10px;
    color: #7F85A3;
`

export const DetailCreated = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    align-items: center;
    width: 100%;
`

export const DetailCreatedText = styled.div`
    
`

export const DetailTitle = styled.div`
    font-weight: bold;
    font-size: 16px;
    color: #000000;
    margin: 5% 0;
`

export const DetailSubjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`

export const CommunityPostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 5%;
    font-weight: bold;
`

export const CommunityPostContent = styled.div`
    font-weight: normal;
    border: 1px solid #CEDEED;
    border-radius: 8px;
    padding: 5%;
    font-size: 12px;
    width: 100%;
    white-space: pre-wrap;
    line-height: 150%;
    margin-bottom: 5%;
`

// comment
export const CommunityCommentWrapper = styled.div`
    width: 100%;
    font-weight: normal;
`

export const CommunityCommentBox = styled.div`
    margin: 5% 0;
    font-size: 10px;
    color: #7F85A3;
`

export const CommunityCommentContent = styled.div`
    font-size: 12px;
    color: #2A2A3A;
    line-height: 120%;
    margin: 5% 0;
    padding-bottom: 5%;
    border-bottom: 1px solid #C0C5DC;
`