import { Button } from 'primereact/button'

interface Props {
  onClick: () => void
}

export default function ButtonEdit({ onClick }: Props) {
  return (
    <Button
      label="Editar"
      icon="pi pi-pencil"
      className="p-button-warning font-bold"
      onClick={onClick}
    />
  )
}
