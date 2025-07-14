import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {Question} from '../index.ts'


//创建子模块
const questionnaire = createSlice({
    name: 'questionnaire',
    initialState: {
        questionList: [] as Question[],
        answerIdList: [] as Number[]
    },
    reducers: {
        setQuestionList(state, action) {
            state.questionList = action.payload
        },
        setAnswerIdList(state, action: PayloadAction<Number>) {
            state.answerIdList.push(action.payload)
        }
    }
})

export default questionnaire.reducer
export const {setQuestionList,setAnswerIdList} = questionnaire.actions