import { useEffect, useState } from "react"
import * as S from "./Styled.jsx"
import CommunityCard from "../community/CommunityCard.jsx";

export default function PopularKeyword() {
  const types = ['일간', '주간', '월간'];
  const [currentType, setCurrentType] = useState('일간');
  const handlerTypeChange = (type) => {
    setCurrentType(type);
  };

  const [popular, setPopular] = useState([]);
  const fetchPopular = async () => {
    try {
      // const response = await API.get(``);
      // const data = response.data;

      // dummy
      const dummy = {
        "isSuccess": true,
        "code": "COMMON200",
        "message": "성공입니다.",
        "result": {
            "communityList": [
                {
                    "communityId": 1,
                    "resultSubject": "배송경로 최적화",
                    "categoryList": [
                      {
                          "category": "과학 • 기술",
                      },
                      {
                          "category": "안전",
                      },
                      {
                          "category": "환경",
                      },
                      {
                          "category": "주택 • 건축",
                      }
                    ],
                    "title": "이 이슈는 어때요??",
                    "content": "글이 이정도라면.. 어떠세요? \n 줄이 바뀌기도 하나요?",
                    "author": "Dongguk2024",
                    "created_at": "2024.01.20",
                    "liked": "51",
                    "my_liked": true,
                    "avgGrowthRate": 45,
                    "influenceFactor": 63                   
                },
                {
                  "communityId": 2,
                  "resultSubject": "배송경로 최적화",
                  "categoryList": [
                    {
                        "category": "과학 • 기술",
                    },
                    {
                        "category": "안전",
                    },
                    {
                        "category": "환경",
                    },
                    {
                        "category": "주택 • 건축",
                    }
                  ],
                  "title": "이 이슈는 어때요??",
                  "content": "글이 이정도라면.. 어떠세요? \n 줄이 바뀌기도 하나요?",
                  "author": "Dongguk2024",
                  "created_at": "2024.01.20",
                  "liked": "40",
                  "my_liked": false,
                  "avgGrowthRate": 45,
                  "influenceFactor": 63  
                }
            ]
        }
      }

      setPopular(dummy.result.communityList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    fetchPopular();
  }, [])

  return(
    <S.SearchContainer>
      <S.PopularTypeContainer>
        {types.map((type, idx)=>(
          <S.PopularType
            key={idx}
            onClick={()=>handlerTypeChange(type)}
            $isselected={type===currentType?'true':'false'}
          >
            {type}
          </S.PopularType>
        ))}
      </S.PopularTypeContainer>
      <S.PopularContent>
        {popular.map((popular, idx)=>(
          <S.PopularContentBox key={idx}>
            <CommunityCard community={popular}/>
            <S.PopularLine />
          </S.PopularContentBox>
        ))}
      </S.PopularContent>
    </S.SearchContainer>
  )
}