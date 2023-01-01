import { Component } from "react"; 
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
      super();
      this.state = {
        monsters: [],
        searchField:''
      };
    }

    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
       .then(response => response.json())
       .then(data => this.setState(() => {
         return {
           monsters: data
         };
       }));
    }

    // Getting search input value and updating searchField variable value
    onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return {searchField};
        });
    }

  render() {
    const { monsters, searchField } = this.state;
     const { onSearchChange } = this;
    // Filtering monsters array based on seach input field value
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='search-box' />
       <CardList monsters={filteredMonsters} />
      </div>
    );
  }
 
}

export default App;
