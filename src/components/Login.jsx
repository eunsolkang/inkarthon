import styled from "styled-components";
import NextButton from "./NextButton";
import InputInfo from "./InputInfo";

const StyledLogin= styled.div`
    background-color: blue;
    height: 100vh;
    width: 100%;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginTitle{
        color: white;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
    }
`

const Login = () => {
    return (
        <StyledLogin>
            <div className="loginTitle">2023</div>
            <div className="loginTitle">인터페이스</div>
            <div className="loginTitle">해커톤</div>

            <InputInfo InputSubject={"ㅁㄴㅇ"} InputContent={"asdf"}>

            </InputInfo>

            <NextButton>
            VOTE
            </NextButton>
        </StyledLogin>
    )
}
export default Login;