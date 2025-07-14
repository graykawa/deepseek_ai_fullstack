import './index.sass'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setQuestionList,setAnswerIdList } from '../../store/modules/questionnaire'
import type { Answer, Question } from '../../store/index'

export default function Index() {
  const [questions, setQuestions] = useState<Array<Question>>([])
  const [current, setCurrent] = useState(1)
  const [isSelected,setIsSelected] = useState(false)
  const [selectedAnswer,setSelectedAnswer] = useState<Answer>()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getData = async () => {
    const response = await fetch('https://mock.mengxuegu.com/mock/6767738f98077b17fe6792e2/question-naire')
    const data = await response.json()
    dispatch(setQuestionList(data)) //存在仓库
    setQuestions(data.questions) //存在页面
  }
  useEffect(() => { //组件初次加载
    getData()
  }, [])

  const selectAnswer = (item: Answer) => {
    setSelectedAnswer(item)
    setIsSelected(true)
  }

  const nextTopic = () => {
    //没选答案
    if(!isSelected){
      return
    }
    if(current === questions.length){
      // 跳页面
      navigate('/result')
    }else{
      if(selectedAnswer){
        dispatch(setAnswerIdList(selectedAnswer.topic_answer_id))
      }
      setIsSelected(false)
      setCurrent(current + 1)
    }
  }

  return (
    <div className="question-container">
      <div className="question-container-header">
        <div className="question-container-header-title">第 {current}/{questions.length} 题</div>
        <div className="question-container-header-progress">
          <div className="question-container-header-progress-bar" style={{ width: `${current / questions.length * 100}%`}}></div>
        </div>
      </div>
      <div className="question-container-body">
        <div className="question-container-body-option">
          <div className="question-container-body-option-card">
            <div className="order">Q{current}</div>
            <div className="title">{questions[current - 1]?.topic_name}</div>
            <ul className='list'>
              {
                questions[current - 1]?.topic_answer.map((item, index) => (
                  <li key={item.topic_answer_id}>
                    <input type="radio" id={`${item.topic_answer_id}`} name={`${item.topic_id}`} onChange={() => {selectAnswer(item)}} />
                    <label htmlFor={`${item.topic_answer_id}`}>{item.answer_name}</label>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="question-container-footer">
        <div className="question-container-footer-button" onClick={nextTopic}>{current === questions.length ? '提交' : '下一题'}</div>
      </div>
    </div>
  )
}
