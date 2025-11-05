import { useState } from 'react'
import './App.css'
import { Fieldset } from 'primereact/fieldset'
import TitleGeneric from './components/TitleGeneric'
import FormRegisterClassroom from './components/FormRegisterClassroom'
import ClassroomList from './components/ClassroomList'

export interface Classroom {
  name: string
  age: number
  guardian: string
  phone?: string
  active: boolean
}

function App() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Incluir nova turma
  function classroomAdd(newClassroom: Classroom) {
    setClassrooms([...classrooms, newClassroom])
  }

  // Atualizar turma existente
  function classroomUpdate(index: number, updated: Classroom) {
    const updatedList = classrooms.map((c, i) =>
      i === index ? updated : c
    )
    setClassrooms(updatedList)
    setSelectedIndex(null)
  }

  return (
    <>
      <TitleGeneric title="Cadastro de Aluno" />

      {/* Formulário para incluir ou alterar */}
      <FormRegisterClassroom
        onAdd={classroomAdd}
        onUpdate={classroomUpdate}
        classrooms={classrooms}
        selectedIndex={selectedIndex}
      />

      <Fieldset legend="Alunos Cadastrados">
        <ClassroomList
          classrooms={classrooms}
          onEdit={(index) => setSelectedIndex(index)}
        />
      </Fieldset>
    </>
  )
}

export default App
