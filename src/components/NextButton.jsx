import styled from "styled-components";

const StyledButton=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 110px;
    background-color: #4A5CFF;
    color: white;
    width: 214px;
    height: 75px;
    border-radius: 10px;
    font-size: 40px;
`


const NextButton=({children, onClickButton})=>{
    return(
        <StyledButton onClick={onClickButton}>
            {children}
        </StyledButton>
    )
}

export default NextButton;