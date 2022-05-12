import Recipe from './Recipe'


const Recipes = ({ recipes, onDelete, onToggle }) => {
  // catch the prop
  return (
    <>
      {recipes.map((recipe, index) => (
      <Recipe 
      key={index} 
      recipe={recipe} 
      onDelete={onDelete} 
      onToggle={onToggle}
      // pass in the prop
      />
      ))}
    </>
  )
}

export default Recipes
