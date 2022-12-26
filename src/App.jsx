import './App.css'

import { useState } from 'react'

import { Input } from './components/Input'

export function App() {
  const [newTask, setNewTask] = useState([])
  const [taskTitle, setTaskTitle] = useState()

  setNewTask = () => {
    
  }

  const addNewTask = e => {
    e.preventDefault()

    setNewTask()
  }

  return (
    <>
      <main>
        <form autoComplete="off" onSubmit={addNewTask}>
          <label htmlFor="task">Digite uma tarefa...</label>
          <Input
            type="text"
            name="task"
            id="task"
            placeholder="Adicione aqui uma nova tarefa"
            onChange={setTaskTitle}
            required
          />
          <Input
            type="submit"
            value="Registrar"
          />

          <Input
            type="reset"
            value="Limpar"
          />
        </form>

        <div className="list-tasks">
          <h1>Lista de tarefas</h1>
          <aside className='list-tasks-pending'>
            <h2>Tarefas pendentes</h2>
            <p id="alert-task-pending-empty"></p>
            {newTask}
          </aside>

          <aside className='list-tasks-concluded'>
            <h2>Tarefas concluídas</h2>
            <p id="alert-task-pending-empty"></p>
          </aside>
        </div>

      </main>
    </>
  )
}
