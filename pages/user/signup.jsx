import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../component/_styled/userStyled.jsx";

export default function Signup() {
  return(
    <S.userWrapper>
      <S.userSection>
        <S.userSign>회원가입</S.userSign>
      
        <S.userLabel>아이디</S.userLabel>
        <S.userPlaceholder
          placeholder="아이디를 입력해주세요."
        />
        <S.userAlarm>
          <S.userAlarmIcon icon={faCheckCircle} />
          <>사용가능한 아이디입니다.</>
        </S.userAlarm>

        <S.userLabel>비밀번호</S.userLabel>
        <S.userPlaceholder
          placeholder="비밀번호를 입력해주세요."
        />

        <S.userLabel>비밀번호 확인</S.userLabel>
        <S.userPlaceholder
          placeholder="비밀번호를 입력해주세요."
        />
        <S.userAlarm>
          <S.userAlarmIcon icon={faCheckCircle} />
          <>비밀번호가 일치합니다.</>
        </S.userAlarm>
      </S.userSection>

      <S.userSection>
        <S.userBtn>회원가입 하기</S.userBtn>
        <S.userFooterAlram>
          <S.userFooterLeft>이미 회원이신가요?</S.userFooterLeft>
          <S.userFooterRight>로그인 하러가기</S.userFooterRight>
        </S.userFooterAlram>
      </S.userSection>
    </S.userWrapper>
  )
}