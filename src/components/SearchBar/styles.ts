import styled from "styled-components";

export const SearchBarContent = styled.div`
    display: flex;
    align-items: center;
    background-color: rgb(233, 233, 233);
    border-radius: 85px;
    padding: 5px;
    margin-bottom: 1.5em;

    input {
        border: none;
        background-color: rgb(233, 233, 233);
        margin-left: 10px;
    }

    input:focus {
        outline: none;
    }
`