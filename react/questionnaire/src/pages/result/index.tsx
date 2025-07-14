import "./index.sass"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import type { RootState } from '../../store/index.ts'
import type { Question, Answer } from '../../store/index.ts'

export default function Index() {
    const [result, setResult] = useState('您真是个小天才！')
    const [score, setScore] = useState(0)
    const { questionList,answerIdList } = useSelector((state: RootState) => state.question)
    useEffect(() => {
        //计算得分
        const questions = questionList.questions
        let sum = 0.0
        for(let i = 0;i < answerIdList.length;i++){
            for(let j = 0;j < questions[i].topic_answer.length;j++){
                if(answerIdList[i] === questions[i].topic_answer[j].topic_answer_id && questions[i].topic_answer[j].is_standard_answer){
                    sum++
                }
            }
        }
        // questionList.forEach((item:Question) => {
        //     //遍历每道题的选项
        //     item.topic_answer.forEach((item_answer:Answer,index) => {
        //         if(answerIdList[index] === item_answer.topic_answer_id && item_answer.is_standard_answer){
        //             sum++
        //         }
        //     })
        // })
        const res = sum / questions.length * 100
        setScore(res)
        if (res < 60) {
            setResult('您需要努力！')
        } else if (res >= 60 && res < 80) {
            setResult('还不错，可以更上一层楼！')
        } else if (res >= 80 && res < 90) {
            setResult('真的很棒呀！')
        } else {
            setResult('您真是个小天才！')
        }
    }, [])
    return (
        <div className="result-container">
            <div className="result-container-header">
                问卷结果
            </div>
            <div className="result-container-body">
                <div className="result-container-body-score">得分：{score}分</div>
                <div className="result-container-body-result">{result}</div>
            </div>
        </div>
    )
}
