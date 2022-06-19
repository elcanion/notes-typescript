import styled from "styled-components";

export const NoteItemContent = styled.div`
    background-color: #51557E;
    color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 1rem;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    word-break: break-all;

    .note-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
    }
`

export const NoteFooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .delete-icon {
        color: white;
        cursor: pointer;
    }
`