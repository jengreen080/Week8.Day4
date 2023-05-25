import styled from "styled-components"

const Quote = styled.p`
    background: #E6E6E6;
    font-style: italic;
    text-align: center;
    padding: 20px;
    margin: 20px auto 10px;
    border-radius: 10px;
    max-width: 18%;
`
const Sayer = styled.figcaption`
    font-style: italic;
    color: #5D5D5D;
    text-align: center;
    margin: auto;
`

const Component = ({by, children}) => {
    
    return(
        <>
            <Quote> "{children}" </Quote>
            <Sayer> -{by} </Sayer>
        </>
    )
}

export default Component