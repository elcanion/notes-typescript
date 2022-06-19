import { Dispatch, SetStateAction } from "react";
import { MdSearch } from "react-icons/md";
import * as S from "./styles"

type Props = {
    handleSearchNote: (setSearchText: string) => void
}

const SearchBar = ({ handleSearchNote }: Props) => {
    return (
        <S.SearchBarContent>
            <MdSearch className="search-icons" size="1.3em" />
            <input 
                onChange={(event) => handleSearchNote(event.target.value)}
                type="text" 
                placeholder="type to search..."
                ></input>
        </S.SearchBarContent>
    )
}

export default SearchBar;