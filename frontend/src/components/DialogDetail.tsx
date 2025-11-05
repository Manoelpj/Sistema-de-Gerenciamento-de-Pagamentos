import { Dialog } from 'primereact/dialog'
import type { Classroom } from '../App'

interface Props {
  visible: boolean
  onHide: () => void
  classroom: Classroom
}

export default function DialogDetail({ visible, onHide, classroom }: Props) {
  return (
    <Dialog
      header={`Detalhes de ${classroom.name}`}
      visible={visible}
      style={{ width: '50vw' }}
      onHide={onHide}
    >
      <p className="m-0">
        Nome: {classroom.name} <br />
        Idade: {classroom.age} anos <br />
        Responsável: {classroom.guardian} <br />
        Telefone: {classroom.phone || 'Não informado'} <br />
        Ativo: {classroom.active ? 'Sim' : 'Não'}
      </p>
    </Dialog>
  )
}
