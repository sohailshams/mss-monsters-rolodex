import { ChangeEvent } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  

const SearchBox = ({placeholder, onChangeHandler}: SearchBoxProps) => (
      <input className='border-0 outline-none p-3 mb-10 flex items-center mx-auto'
      type='search' 
      placeholder={placeholder} 
      onChange={onChangeHandler} 
      />
  )

export default SearchBox;