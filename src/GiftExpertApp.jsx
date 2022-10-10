import React,{useState} from 'react'
import { AddCategory , GifGrid } from './components/';
const GiftExpertApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([...categories,newCategory])
  }


  return (
    <>
      <h1>App of Gif</h1>
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
       /> 
        {categories.map((category) => (
            <GifGrid 
              category={category} 
              key={category}/>    
        ))}
     </>
  )
}

export default GiftExpertApp;