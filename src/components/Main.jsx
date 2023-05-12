import { styled } from "styled-components";

const StyledMain = styled.div`
    background-color: blue;
    height: 100vh;
    display:flex;
    justify-content: center;
    .title{
        font-size: 4rem;
        color: white;
    }

    
`

const Main = () => {
    return(
        <StyledMain>
            <div className="title">
                2023 인커톤
            </div>
        </StyledMain>
    )
}

export default Main;