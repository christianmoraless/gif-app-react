import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';

const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch','Goku'])

  return (
    <>
      <h1>App of Gif</h1>
      <AddCategory setCategories={setCategories}/>
      <ol>
        {
          categories.map((category,index) => (
            <li key={index}>
              {category}
            </li>
          ))
        }
      </ol>
     </>
  )
}

export default GiftExpertApp;