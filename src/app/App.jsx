
import {useState} from 'react'

import {Input} from '../components/input/Input'
import {Button} from '../components/button/Button'
import {List} from '../components/list/List'

import './App.css';

const App = () => {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onClick = () => {
    if(!value) {
      return
    }

    setList((prev) => [...prev, value])
    setValue('')
  }

  const onKeyDown = (event) => {
    if (event.which === 13) {
      onClick()
    }
  }
  
  return (
    <div className='root'>
      <div className='content'>
        <div className='wrapper'>
          <Input value={value} onChange={onChange} onKeyDown={onKeyDown}/>
          <Button onClick={onClick}/>
        </div>
        <List list={list}/>
      </div>
    </div>
  );
}

export default App;

