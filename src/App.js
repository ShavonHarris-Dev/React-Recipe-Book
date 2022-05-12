import { useState, useEffect }from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Recipes from './components/Recipes'
import AddRecipe from './components/AddRecipe'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes()
      setRecipes(recipesFromServer)
    }
    getRecipes()
  }, [])
  // pass in a dependency array if you have any

// fetch Recipes
const fetchRecipes = async () => {
  const res = await fetch('http://localhost:5000/recipes')
//  await the promise
const data = await res.json()
// await the json data
console.log(data)
return data
}

// Fetch Recipe 
const fetchRecipe = async (id) => {
  const res = await fetch(`http://localhost:5000/recipes/${id}`)
//  await the promise
const data = await res.json()
// await the json data
// console.log(data)
return data
}


// add recipe 
const addRecipe =  async (recipe) => {

  const res = await fetch('http://localhost:5000/recipes', {
method: 'POST',
headers: {
  'Content-type':'application/json'
},
body:JSON.stringify(recipe)
  })
// a post request to add data
//  we need headers to specify our content type
// we want to set the body (data) that we are sending
// JSON.stringify turns is from a js object to a json string

const data = await res.json()
// this data returned is the new recipe just created

setRecipes([...recipes, data])



  // console.log(recipe)
  //  add to the state 
//   const id = Math.floor(Math.random() * 10000) + 1

//  const newRecipe = {id, ...recipe}

//  setRecipes([...recipes, newRecipe ])

}

// delete recipes
const deleteRecipe = async (id ) => {
  await fetch(`http://localhost:5000/recipes/${id}`, {
    method:'DELETE'
  })
  setRecipes(recipes.filter((recipe) => recipe.id !==
  id))
}
//  make a simple delete request

//  toggle Made 

const toggleMade = async (id) => {
  const recipeToToggle = await fetchRecipe(id)
  const updRecipe = {...recipeToToggle,
  made: !recipeToToggle.made }
  // get the recipe, uodate the recipe, put it in a variable

  const res = await fetch(`http://localhost:5000/recipes/${id}`, {
    method: 'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(updRecipe)
  })

  const data = await res.json()
// update add id
// add headers sending date
  setRecipes(recipes.map((recipe) => 
  recipe.id === id ? {...recipe, made: 
    data.made} : recipe
    )
  )
}




  return (
    <Router>
      <div className="container">
      <Header 
      onAdd={() => setShowAddRecipe
      (!showAddRecipe)} 
      showAdd={showAddRecipe}
      />
      <Routes>
        <Route 
        path='/'
        element={
          <>
          {/* <AddRecipe onAdd={addRecipe}/> */}
       {showAddRecipe && <AddRecipe onAdd={addRecipe} />}
      { recipes.length > 0 ? (
      <Recipes recipes={recipes} onDelete=
      {deleteRecipe} onToggle={toggleMade}/>
      ) : (
        'No Recipes To Show'
      )}
          </>
        }
        />
    <Route path='about' element={<About />}
      />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
