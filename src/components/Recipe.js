import { FaTimes } from 'react-icons/fa'
// using icons as react components/ fa for font awesome



const Recipe = ({ recipe, onDelete, onToggle}) => {
  return (
    <div
     className={`recipe ${recipe.made ? 'made' : '' }`} onDoubleClick={() => onToggle(recipe.id)} 
     >
      <h3>
        Dish: {recipe.dish}{''}
         <FaTimes 
         style={{color: 'red', cursor: 'pointer' }} 
    onClick={() => onDelete(recipe.id)} 
    />
    
      </h3>
      <hr></hr>
     
        Ingredients:
        <p>{recipe.ingredients}</p>
      
      Instructions:
      <p>{recipe.instructions}</p>
    </div>
  )
}

export default Recipe