import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../component/_styled/userStyled.jsx";
import { useRouter } from "next/router.js";

export default function Signup() {
  const router = useRouter();

  return(
    <S.userWrapper>
      <S.userSection>
        <S.userSign>로그인</S.userSign>
      
        <S.userLabel>아이디</S.userLabel>
        <S.userPlaceholder
          placeholder="아이디를 입력해주세요."
        />

        <S.userLabel>비밀번호</S.userLabel>
        <S.userPlaceholder
          placeholder="비밀번호를 입력해주세요."
        />
      </S.userSection>

      <S.userSection>
        <S.userBtn>로그인 하기</S.userBtn>
        <S.userFooterAlram>
          <S.userFooterLeft>아직회원이 아니신가요?</S.userFooterLeft>
          <S.userFooterRight
            onClick={()=>{
              router.push(`/user/signup`)
            }}
          >회원가입 하러가기</S.userFooterRight>
        </S.userFooterAlram>
      </S.userSection>
    </S.userWrapper>
  )
}