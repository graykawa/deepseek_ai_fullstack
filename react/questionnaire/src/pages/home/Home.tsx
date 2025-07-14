import logo from '../../assets/logo.png'
import './Home.sass'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const toQuestionPage = () => {
    navigate('/question')
  }
  return (
    <div className="home-container">
        <div className="home-box">
            <div className="home-box-header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="title">欢迎参加旅梦的问卷调查</div>
                <div className="desc">您的每一个想法都很重要</div>
            </div>
            <div className="home-box-button" onClick={toQuestionPage}>开始问卷</div>
        </div>
    </div>
  )
}
