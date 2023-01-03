const SearchBox = ({placeholder, onChangeHandler}) => (
      <input className='border-0 outline-none p-3 mb-10 flex items-center mx-auto'
      type='search' 
      placeholder={placeholder} 
      onChange={onChangeHandler} 
      />
  )

export default SearchBox;