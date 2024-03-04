import { useRouter } from "next/router.js";
import * as S from "../../../component/_styled/communityStyled.jsx";
import { useState } from "react";

export default function Write() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  };

  const [content, setContent] = useState('');
  const handleContentChange = (e) => {
    setContent(e.target.value)
  };

  return(
    <S.CreateWrapper>
      <S.CreateText>선택한 이머징 이슈에 대하여 글을 작성해 주세요</S.CreateText>
      <S.WriteLabel>글 제목</S.WriteLabel>
      <S.WriteTitle 
        placeholder="글 제목을 입력해 주세요"
        value={title}
        onChange={handleTitleChange}
        type="text"
      />
      <S.WriteLabel>본문 내용</S.WriteLabel>
      <S.WriteTextarea
        placeholder="본문 내용을 입력해 주세요"
        value={content}
        onChange={handleContentChange}
        type="text"
      />
      <S.WriteBtnBox>
        <S.WriteBackBtn
          onClick={()=>{router.back();}}
        >뒤로 가기</S.WriteBackBtn>
        <S.WriteSubmitBtn $active={(title.length>0&&content.length>0)}>완료</S.WriteSubmitBtn>
      </S.WriteBtnBox>
    </S.CreateWrapper>
  )
}