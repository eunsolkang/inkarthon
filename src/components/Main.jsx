import { styled } from "styled-components";

const StyledMain = styled.div`
    background-color: blue;
    height: 100vh;
    .title{
        font-size: 4rem;
        color: white;
        span{
            font-size: 3rem;
        }
    }
`

const Main = () => {
    return(
        <StyledMain>
            <div className="title">
                2023 Interface Hackarthon
                <div>
                    x제주몰빵
                </div>
            </div>
        </StyledMain>
    )
}

export default Main;