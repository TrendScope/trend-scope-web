import { useEffect, useState } from "react"
import * as S from "./Styled.jsx"
import API from "../../pages/api.js"
import { useRouter } from "next/router.js";

export default function IssueHistory() {
  const router = useRouter();
  const { id } = router.query;

  const [historys, setHistorys] = useState([]);
  const fetchHistorys = async () => {
    try {
      // const response = await API.get(``);
      // const data = response.data;

      // dummy
      const dummy = {
        "isSuccess": true,
        "code": "COMMON200",
        "message": "성공입니다.",
        "result": {
            "historyList": [
                {
                    "historyId": 1,
                    "resultSubject": "드론",
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
                  "avgGrowthRate": 45,
                  "influenceFactor": 63 
                },
                {
                    "historyId": 2,
                    "resultSubject": "드론2",
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
                  "avgGrowthRate": 45,
                  "influenceFactor": 63 
                }
            ]
        }
      }

      setHistorys(dummy.result.historyList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    fetchHistorys();
  }, [])
  
  useEffect(() => {
    console.log(historys); // Log the updated state here
  }, [historys, ]);

  return(
    <S.HistoryContainer>
      <S.HistoryCardSlide>
        {historys.map((history, idx)=>(
          <S.HistoryCard
            key={idx}
            onClick={()=>{router.push(`/issue/${id}`)}}
          >
            <S.HistoryCardTop>
              <S.HistoryCardText>
                  <S.HistoryCardDate>2024.02.20</S.HistoryCardDate>
                  <S.HistoryCardTheme>주제어: {history.resultSubject}</S.HistoryCardTheme>
              </S.HistoryCardText>
              <S.HistoryCardPercent
                  $percent={75}
              >
                <S.HistoryCardPercentInner>75%</S.HistoryCardPercentInner>
              </S.HistoryCardPercent>
            </S.HistoryCardTop>
            <S.HistoryCardCategoryBox>
              <S.SearchCheckedCategory>
                {history.categoryList[0].category}
              </S.SearchCheckedCategory>
              <S.SearchCheckedCategory>
                {history.categoryList[1].category}
              </S.SearchCheckedCategory>
              <S.SearchCategoryMore>...</S.SearchCategoryMore>
            </S.HistoryCardCategoryBox>
          </S.HistoryCard>
        ))}
      </S.HistoryCardSlide>
    </S.HistoryContainer>
  )
}