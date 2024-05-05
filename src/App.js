import { LuInstagram } from "react-icons/lu";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="/myphoto.jpg" className="my-photo" alt="Photo" />
        <p className="text">
          황유민
        </p>
        <h3>
          2003.10.06
        </h3>
        <h2>
          #INFJ #AI컴퓨터공학심화 #PARD #3기 #웹
        </h2>
      </header>
      <div className="favorite">
        <p className="text">
          내가 좋아하는 3가지
        </p><br/>
        <br/>
        <div className="list">
          <div>
            <img src="/pasta.jpeg" className="photo" alt="Photo" />
            <p className="subtext">파스타</p>
          </div>
          <div>
            <img src="/cracker.jpeg" className="photo" alt="Photo" />
            <p className="subtext">참크래커</p>
          </div>
          <div>
            <img src="/noeuljin.jpg" className="photo" alt="Photo" />
            <p className="subtext">노을진 새새</p>
          </div>
        </div>
      </div>
      <div className="goal">
        <p className="text">나의 24-1 학기 목표</p>
        <div className="goal-detail">
          <div className="first">
            <p className="subtext">
              1. 성취 경험 쌓기
            </p>
          </div>
          <div className="second">
            <p className="subtext">
              2. 인격적으로 성장하기
            </p>
          </div>
          <div className="third">
            <p className="subtext">
              3. 건강한 몸과 마음
            </p>
          </div>
        </div>
      </div>
      <div className="motto">
        <p className="text">좌우명<br />실수를 통해 배우면서 조금씩 나아지자!</p>
      </div>
      <div className="bottom">
      <a
          className="link"
          href="https://www.handong.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HGU
        </a>
        <a
          className="link"
          href="https://we-pard.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/pard.png" className="pard" alt="PARD Logo" />
        </a>
        <a
          className="link"
          href="https://www.instagram.com/yooominh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuInstagram />
        </a>
      </div>
    </div>
  );
}

export default App;
