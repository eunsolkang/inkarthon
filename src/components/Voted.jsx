import { styled } from "styled-components";
import { StyledTitle } from "./Vote";
import { Link } from "react-router-dom";

const StyledVoted = styled.div`
    padding: 45px 20px;
    height: 100vh;
    background-color: rgb(35, 57, 255);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content:space-between ;
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
    .button{
        color: white;
    }
`;

const Voted = () => {
    
    return (
        
        <StyledVoted>
            <StyledTitle>인커톤 2023</StyledTitle>
            <div className="question">
                투표가<br/>
                마무리<br/>
                되었어요<br/>
            </div>
            <Link to='/'>
                <div className="button">
                    GO TO MAIN
                </div>
            </Link>
        </StyledVoted>
    )
}

export default Voted;