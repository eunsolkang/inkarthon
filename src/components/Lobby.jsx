import { styled } from "styled-components";
import { StyledButton, StyledTitle } from "./Vote";
import { Link, useNavigate } from "react-router-dom";

const StyledLobby = styled.div`
    padding: 45px 20px;
    height: 100vh;
    background-color: rgb(35, 57, 255);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items: center;
    .question{
        margin-top: 2rem;
        font-size: 50px;
        line-height: 50px;
        margin-bottom: 2rem;
    }
`;

const Lobby = () => {
    const navigator = useNavigate();
    const team = window.localStorage.getItem('team')
    if(!team){
        navigator('/login')
    }
    return (
        <StyledLobby>
            <StyledTitle>인커톤 2023</StyledTitle>
            <div className="question">
                모든<br/>
                투표가<br/>
                끝났어요<br/>
            </div>
            <Link to={`/Thalamus/${team}/`}>
            <StyledButton>
                우리 조 결과 확인하기
            </StyledButton>
            </Link>
        </StyledLobby>
    )
}

export default Lobby;