import { useState } from 'react'
import './App.css'
import FormRegisterClassroom from './components/FormRegisterClassroom';
import TitleGeneric from './components/TitleGeneric';
import { Fieldset } from 'primereact/fieldset';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button'

function App() {
  const [classrooms, setClassrooms] = useState([]);

  // Estado que guarda o índice do aluno com Dialog aberto, ou null se nenhum aberto
  const [dialogVisibleIndex, setDialogVisibleIndex] = useState(null);

  function classroomAdd(newClassroom) {
    setClassrooms([...classrooms, newClassroom]);
  }

  function classroomDelete(index) {
    setClassrooms(classrooms.filter((_, i) => i !== index));
    // Fechar diálogo se o aluno deletado estiver aberto
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
          {classrooms.map((classroom, index) => (
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
                style={{ width: '50vw' }}
                onHide={() => setDialogVisibleIndex(null)}
              >
                <p className="m-0">
                  Nome: {classroom.name} <br />
                  Idade: {classroom.age} anos <br />
                  Responsável: {classroom.guardian} <br />
                  Telefone: {classroom.phone || 'Não informado'} <br />
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
