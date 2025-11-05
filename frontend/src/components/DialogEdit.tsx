import { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import type { Classroom } from '../App'

interface Props {
  visible: boolean
  onHide: () => void
  classroom: Classroom
  onSave: (updated: Classroom) => void
}

export default function DialogEdit({ visible, onHide, classroom, onSave }: Props) {
  const [form, setForm] = useState<Classroom>({ ...classroom })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  function handleSubmit() {
    onSave({ ...form, age: Number(form.age) })
  }

  return (
    <Dialog
      header={`Editar ${classroom.name}`}
      visible={visible}
      style={{ width: '50vw' }}
      onHide={onHide}
    >
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          placeholder="Nome"
        />
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          className="border p-2 rounded"
          placeholder="Idade"
        />
        <input
          type="text"
          name="guardian"
          value={form.guardian}
          onChange={handleChange}
          className="border p-2 rounded"
          placeholder="Responsável"
        />
        <input
          type="text"
          name="phone"
          value={form.phone || ''}
          onChange={handleChange}
          className="border p-2 rounded"
          placeholder="Telefone"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
          />
          Aluno ativo
        </label>

        <Button
          label="Salvar alterações"
          icon="pi pi-check"
          onClick={handleSubmit}
        />
      </div>
    </Dialog>
  )
}
