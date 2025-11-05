import { useState } from 'react'
import type { Classroom } from '../App'
import ButtonDetail from './ButtonDetail'
import ButtonEdit from './ButtonEdit'
import DialogDetail from './DialogDetail'
import DialogEdit from './DialogEdit'

interface Props {
  classroom: Classroom
  index: number
  onUpdate: (index: number, updated: Classroom) => void
}

export default function ClassroomItem({ classroom, index, onUpdate }: Props) {
  const [detailVisible, setDetailVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)

  return (
    <li className="flex flex-row gap-[2em] items-center">
      {classroom.name} - {classroom.age} anos - Resp: {classroom.guardian}
      <ButtonDetail onClick={() => setDetailVisible(true)} />
      <ButtonEdit onClick={() => setEditVisible(true)} />

      <DialogDetail
        visible={detailVisible}
        onHide={() => setDetailVisible(false)}
        classroom={classroom}
      />
      <DialogEdit
        visible={editVisible}
        onHide={() => setEditVisible(false)}
        classroom={classroom}
        onSave={(updated) => {
          onUpdate(index, updated)
          setEditVisible(false)
        }}
      />
    </li>
  )
}
