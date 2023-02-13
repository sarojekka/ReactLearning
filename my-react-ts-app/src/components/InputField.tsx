import React from 'react'
import './InputField.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}
const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}) =>{

  return (
    <form className='input' onSubmit={handleAdd}>
        <input type="text" 
            value={todo}
            onChange = {(e) => setTodo(e.target.value)} 
            placeholder="Enter a task" 
            className="input__box" />
        <button type="submit" className="input_submit">
            GO
        </button>
    </form>
  )
}

export default InputField