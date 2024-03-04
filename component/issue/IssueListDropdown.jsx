import * as S from "./Styled.jsx";

export default function IssueListDropdown({ types, setCurrentType, currentType, location=true }) {
  const handlerTypeChange = (type) => {
    setCurrentType(type);
  };
  return(
    <S.IssueDropdownWrappepr
      location={location?'true':'false'}
    >
      <S.IssueDropdownTop>옵션을 선택해 주세요</S.IssueDropdownTop>
      {types.map((type, idx)=>(
        <S.IssueDropdownType
          type={type}
          key={idx}
          onClick={()=>{handlerTypeChange(type)}}
          isselected={type===currentType?'true':'false'}
        >{type}</S.IssueDropdownType>
      ))}
    </S.IssueDropdownWrappepr>
  )
}