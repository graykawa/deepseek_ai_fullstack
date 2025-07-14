// 创建总仓库
import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from './modules/questionnaire'


export const store = configureStore({
    reducer: {
        question: questionnaireReducer
    }
})

// 获取整个仓库的类型
export type RootState = ReturnType<typeof store.getState>
export interface Answer{
    topic_answer_id: number
    answer_name: string
    is_standard_answer: number
    topic_id: number
}
export interface Question{
    topic_name: string
    topic_answer: Array<Answer>
}