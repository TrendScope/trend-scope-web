import * as S from "./Styled.jsx";
import factor1 from "../image/factor1.svg"
import factor2 from "../image/factor2.svg"
import { useEffect, useRef } from "react";

export default function IndicatorModal({ modalOpenHandler }) {
  const outSection = useRef();
  const useOneClickOutside = (ref, handler) => {
    useEffect(()=>{
      const listener = (e) => {
        if(!ref.current || ref.current.contains(e.target)) {
          return;
        }
        handler();
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    });
  }
  useOneClickOutside(outSection, modalOpenHandler)
  return(
    <S.ModalWrapper ref={outSection}>
      <S.CardTitle>
        <S.CardIcon src={factor1} alt="factor1"/>
        <S.CardText>평균 증가율</S.CardText>
      </S.CardTitle>
      <S.ModalText>연도별로 이머징 이슈의 출현 빈도 증가율을 나타냅니다</S.ModalText>
      <S.CardTitle>
        <S.CardIcon src={factor2} alt="factor1"/>
        <S.CardText>영향력 지수</S.CardText>
      </S.CardTitle>
      <S.ModalText>최종 도출 이슈 명으로 검색한 논문 내 수치 데이터를 나타냅니다</S.ModalText>
    </S.ModalWrapper>
  )
}