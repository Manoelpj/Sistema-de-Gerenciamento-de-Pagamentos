// import { useState, useEffect } from 'react'
// import './App.css'
// import { Fieldset } from 'primereact/fieldset'
// import TitleGeneric from './components/TitleGeneric'
// import FormRegisterClassroom from './components/FormRegisterClassroom'
// import ClassroomList from './components/ClassroomList'

// export interface Classroom {
//   name: string
//   age: number
//   guardian: string
//   phone?: string
//   active: boolean
// }

// function App() {
  // const [classrooms, setClassrooms] = useState<Classroom[]>([])
  // const [selectedIndex, setSelectedIndex] = useState<number | null>(null)


  // function classroomAdd(newClassroom: Classroom) {
  //   setClassrooms([...classrooms, newClassroom])
  // }


  // function classroomUpdate(index: number, updated: Classroom) {
  //   const updatedList = classrooms.map((c, i) =>
  //     i === index ? updated : c
  //   )
  //   setClassrooms(updatedList)
  //   setSelectedIndex(null)
  // }

  // useEffect(() => {
  //   setClassrooms([
  //     { name: 'João', age: 10, guardian: 'Maria', phone: '123456789', active: true },
  //     { name: 'Pedro', age: 12, guardian: 'Ana', phone: '987654321', active: true },
  //     { name: 'Paulo', age: 14, guardian: 'Carlos', phone: '456789123', active: true },
  //   ])
  // }, [])

//   return (
//     <div>
//       {/* <Aside/> */}
//     </div>
//   )
// }

// export default App


      // <div className='ml-[10px]'>

      //   <TitleGeneric title="Cadastro de Aluno" />

      //   <FormRegisterClassroom
      //     onAdd={classroomAdd}
      //   />

      //   <Fieldset legend="Alunos Cadastrados">
      //     <ClassroomList
      //       classrooms={classrooms}
      //       onUpdate={classroomUpdate}
      //     />
      //   </Fieldset>
      // </div>
