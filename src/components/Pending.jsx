import { styled } from "styled-components";
import { StyledTitle } from "./Vote";

const StyledPending = styled.div`
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
    }
    .desc{
        margin-top: 2rem;
        font-size: 25px;
        line-height: 25px;
    }
`;

const Pending = () => {
    return (
        <StyledPending>
        <StyledTitle>인커톤 2023</StyledTitle>
        <div className="question">
            현재<br/>
            결과<br/>
            집계중이에요<br/>
        </div>
        <div className="desc">
            조금만 기다려주세요...
        </div>
        </StyledPending>
    )
}

export default Pending;