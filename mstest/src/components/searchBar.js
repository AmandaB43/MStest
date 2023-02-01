import React, {useState} from 'react'


const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const recipes = [

  { name: "Spaghetti", Ethnicity: "Italian" },
  { name: "Carne Asada Tacos", Ethnicity: "Hispanic" },
  { name: "Cheesburger", Ethnicity: "American" },
  { name: "Pho", Ethnicity: "Asian" },
  { name: "Sushi Bake", Ethnicity: "Japanese" },
  { name: "Chicken Curry", Ethnicity: "Indian" },
  { name: "Tiramisu", Ethnicity: "Italian" },
  { name: "Cheescake", Ethnicity: "American" },
  { name: "Macarons", Ethnicity: "Hispanic" },
  { name: "Pan Fried Dumplings", Ethnicity: "Chinese" },
  { name: "Mochi Balls", Ethnicity: "Asian" },
];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    recipes.filter((recipe) => {
    return recipe.name.match(searchInput);
});
}

return <div>

<input
   type="search"
   placeholder="Whatcha cookin'?"
   onChange={handleChange}
   value={searchInput} />

<table>
  <tr>
    <th>Search for </th>
    <th>recipes here!</th>
  </tr>

{recipes.map((recipe, index) => {

<div>
  <tr>
    <td>{recipe.name}</td>
    <td>{recipe.Ethnicity}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default SearchBar;