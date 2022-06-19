import styled from "styled-components";

export const AddNoteContent = styled.div`
    background-color: #816797;
    color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 1rem;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    word-break: break-all;
`

export const AddNoteFooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AddNoteSaveButton = styled.button`
    background-color: #e1e1e1;
    border: none;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;

    &:hover {
        background-color: #ededed;
        cursor: pointer;
    }
`

export const AddNoteTextArea = styled.textarea`
    border: none;
    resize: none;
    max-width: 100%;
    max-height: 100%;
    background-color: #816797;
    color: white;

    &:focus {
        outline:none;
    }

    &::placeholder {
        color: white;
    }
`