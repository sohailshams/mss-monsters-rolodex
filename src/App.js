import {useState, useEffect} from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
       .then(response => response.json())
       .then(data => setMonsters(data)); 
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }); 

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

   // Getting search input value and updating searchField variable value
   const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  }

  return (
    <div className="min-h-full items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-700">
      <div className="max-w-[90%] mx-auto">
        <h1 className="text-center py-16 font-bold text-[30px] font-['Neucha']">Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='search-box' />
        <CardList monsters={filteredMonsters} />
      </div>
    </div>
  )
}

export default App;
