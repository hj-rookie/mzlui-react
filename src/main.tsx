import React from 'react'
import ReactDOM from 'react-dom/client'
import {Button,Input} from '../packages'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <Button title="测试"></Button>
    <Input title="输入框"></Input>
  </div>
)
