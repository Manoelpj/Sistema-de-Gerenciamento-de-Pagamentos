import { useState } from 'react'
import { FloatLabel } from 'primereact/floatlabel';                           
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button'

export default function FormRegisterClassroom({ onAdd }) {
  const [nameClassroom, setNameClassroom] = useState('');
  const [ageClassroom, setAgeClassroom] = useState('');
  const [guardianClassroom, setGuardianClassroom] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(e) {
    e.preventDefault();


    const newClassroom = {
      name: nameClassroom,
      age: ageClassroom,
      guardian: guardianClassroom,
      phone: phone
    };

    // Chama a função para adicionar aluno
    onAdd(newClassroom);

    setNameClassroom('');
    setAgeClassroom('');
    setGuardianClassroom('');
    setPhone('');
  }

  return (
    <form onSubmit={handleSubmit} className='
      flex flex-col gap-[2em] justify-center justify-items-center
      items-center
      w-[500px] h-[500px]
    '>
      <FloatLabel>
        <InputText id="name" value={nameClassroom} onChange={(e) => setNameClassroom(e.target.value)} />
        <label htmlFor="name">Classroom name</label>
      </FloatLabel>

      <FloatLabel>
        <InputText id="age" value={ageClassroom} onChange={(e) => setAgeClassroom(e.target.value)} keyfilter="pint" />
        <label htmlFor="age">Classroom age</label>
      </FloatLabel>

      <FloatLabel>
        <InputMask id="phone" mask="(99)99999-9999" value={phone} onChange={(e) => setPhone(e.target.value)}></InputMask>
        <label htmlFor="phone">Phone</label>
      </FloatLabel>

      <FloatLabel>
        <InputText id="guardian" value={guardianClassroom} onChange={(e) => setGuardianClassroom(e.target.value)} />
        <label htmlFor="guardian">Guardian name</label>
      </FloatLabel>

      <Button label="Submit" type="submit" />
    </form>
  );
}
