import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('One Punch')

  const onInputChange = (e) =>{
    setInputValue(e.target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault()
    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
