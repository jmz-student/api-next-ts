import Style from "styled-components";

const Wrapper = Style.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    font-size: 30px;
    color: white;
    height: auto;
    width: 500px;
    margin: 150px auto;
    border: 5px solid white;
    padding: 1rem 0;

    & input{
        margin-top: 1rem;
        caret-color: green;
        border-radius: 15px;
        padding: .5rem;
    }

    & button{
        margin: 1rem 0;
        background-color: blue;
        color: white;
        border-radius: 20px;
        width: 100px;
        height: 30px;
        &:hover{
            background-color: red;
            cursor: pointer;
        }
    }

    & label:nth-of-type(2){
        margin-top: 1rem;
        color: pink;
    }
`;

const WrapperDiv = Style.div`

`

export {
    Wrapper,
    WrapperDiv
}
