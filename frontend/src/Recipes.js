import React from 'react'
import useRecipe from './hooks/useRecipe'
import OneRecipe from './OneRecipe'

export default function Recipes() {
  const { recipe } = useRecipe()
  console.log(recipe)

  return (
    <>
      {recipe ? (
        <div>
          {recipe.map((oneItem) => (
            // <div>
            //   <div className="d-flex">
            //     <div>
            <OneRecipe text={oneItem.name} image={oneItem.img} />
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      ) : (
        <div>'nkutya'</div>
      )}
    </>
  )
}
