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
    const onChangeInput = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
    }

    return (
        <StyledLogin>
            <div className="loginTitle">인커톤 2023</div>
            
            <InputInfo name="name" InputSubject={"ㅁㄴㅇ"} onChangeInput={onChangeInput}>

            </InputInfo>
            <InputInfo name="team" InputSubject={"ㅁㄴㅇ"} onChangeInput={onChangeInput}>

            </InputInfo>

            <NextButton>
            VOTE
            </NextButton>
        </StyledLogin>
    )
}
export default Login;