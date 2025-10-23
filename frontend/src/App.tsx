import { useState } from 'react'
import './App.css'
import FormRegisterClassroom from './components/FormRegisterClassroom';
import TitleGeneric from './components/TitleGeneric';
import { Fieldset } from 'primereact/fieldset';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button'

interface Classroom {
  name: string;
  age: number;
  guardian: string;
  phone: string;
}

function App() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);

  const [dialogVisibleIndex, setDialogVisibleIndex] = useState<number | null>(null);

  function classroomAdd(newClassroom: Classroom) {
    setClassrooms([...classrooms, newClassroom]);
  }

  function classroomDelete(index: number) {
    setClassrooms(classrooms.filter((_, i) => i !== index));
    if (dialogVisibleIndex === index) {
      setDialogVisibleIndex(null);
    }
  }

  return (
    <>
      <TitleGeneric title='Cadastro de aluno' />
      <FormRegisterClassroom onAdd={classroomAdd} />

      <Fieldset legend="Alunos Cadastrados">
        {classrooms.length === 0 && <p>Nenhum aluno cadastrado ainda.</p>}
        <ul className='flex flex-col gap-[4em]'>
          {classrooms.map((classroom: Classroom, index: number) => (
            <li key={index} className='flex flex-row gap-[2em] items-center'>
              {classroom.name} - {classroom.age} anos - Responsável: {classroom.guardian}

              <Button onClick={() => classroomDelete(index)} className='font-bold'>Deletar</Button>
              <Button
                label="Detalhar"
                icon="pi pi-external-link"
                onClick={() => setDialogVisibleIndex(index)}
              />
              <Dialog
                header={`Detalhes de ${classroom.name}`}
                visible={dialogVisibleIndex === index}
                className="w-[50vw]"
                onHide={() => setDialogVisibleIndex(null)}
              >
                <p className="m-0">
                  Nome: {classroom.name} <br />
                  Idade: {classroom.age} anos <br />
                  Responsável: {classroom.guardian} <br />
                  Telefone: {classroom.phone} <br />
                </p>
              </Dialog>
            </li>
          ))}
        </ul>
      </Fieldset>
    </>
  )
}

export default App;
