import { useState } from "react";
import * as S from "../main/Styled.jsx";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";

export default function CreateComment() {
  const [comment, setComment] = useState('');
  const handleCommentChange = (e) => {
    setComment(e.target.value)
  };
  return(
    <S.SearchTheme>
      <S.SearchThemePlaceholder
        placeholder="댓글을 입력해 주세요"
        value={comment}
        onChange={handleCommentChange}
        type="text"
      />
      <S.SearchThemeBtn
        isactive={(comment.length>0) ? 'true' : 'false'}
      >
        <S.SearchThemeBtnFont icon={faCommentAlt}/>
      </S.SearchThemeBtn>
    </S.SearchTheme>
  )
}