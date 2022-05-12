import { useState } from 'react'


const AddRecipe = ({ onAdd }) => {
    const [dish, setDish] = useState('')
    const [instructions, setInstructions] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [made, setMade] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

     if(!dish) {
        alert('Please add a title')
        return
     } 
    

    onAdd({ dish, instructions, made, ingredients })

    setDish('')
    setInstructions('')
    setIngredients('')
    setMade(false)
}


  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
          <label>Recipe</label>
          <input 
          type='text' 
          placeholder='Add New Recipe'
           value={dish}  
           onChange={(e) => setDish(e.target.value)}
           />
    </div>
    <div className='form-control'>
          <label>Ingredients</label>
          <textarea 
          name="ingredients" 
          // cols="five" 
          wrap='hard'
          value={ingredients}  
          onChange={(e) => setIngredients(e.target.value)} 
          />
    </div>
     <div className='form-control'>
          <label>Instructions</label>
          <textarea 
          wrap='soft'
          type='instructions' 
          // placeholder='Instructions' 
          value={instructions}  
          onChange={(e) => setInstructions(e.target.value)} 
          />
    </div>
    <div className='form-control form-control-check'>
          <label >Made it?</label>
          <input 
          type='checkbox' 
          checked={made}
          value={made}  
          onChange={(e) => setMade(e.currentTarget.checked)} 
          />
    </div>
          
          <input type='submit' value='Save Recipe' className='btn btn-block' />  
    </form>
  )
}



export default AddRecipe
