import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Classroom } from '../App'
import { Button } from 'primereact/button'

interface Props {
  onAdd: (classroom: Classroom) => void
}

export default function FormRegisterClassroom({ onAdd }: Props) {
  const [form, setForm] = useState<Classroom>({
    name: '',
    age: 0,
    guardian: '',
    phone: '',
    active: true,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.name || !form.guardian || !form.age) return
    onAdd({ ...form, age: Number(form.age) })
    setForm({ name: '', age: 0, guardian: '', phone: '', active: true })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 
    mb-[150px]
    w-[200px] h-[200px]">
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={form.name}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      />
      <input
        type="number"
        name="age"
        placeholder="Idade"
        value={form.age || ''}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      />
      <input
        type="text"
        name="guardian"
        placeholder="Responsável"
        value={form.guardian}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
      />
      <input
        type="text"
        name="phone"
        placeholder="Telefone"
        value={form.phone || ''}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
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
      <Button type="submit" label="Adicionar" className="w-fit" />
    </form>
  )
}
