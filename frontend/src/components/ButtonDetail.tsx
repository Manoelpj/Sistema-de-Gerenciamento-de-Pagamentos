import { Button } from 'primereact/button'

interface Props {
  onClick: () => void
}

export default function ButtonDetail({ onClick }: Props) {
  return (
    <Button
      label="Detalhar"
      icon="pi pi-external-link"
      onClick={onClick}
    />
  )
}
