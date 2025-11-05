import ClassroomItem from './ClassroomItem'
import type { Classroom } from '../App'

interface Props {
  classrooms: Classroom[]
  onUpdate: (index: number, classroom: Classroom) => void
}

export default function ClassroomList({ classrooms, onUpdate }: Props) {
  if (classrooms.length === 0)
    return <p>Nenhum aluno cadastrado ainda.</p>

  return (
    <ul className="flex flex-col gap-[4em]">
      {classrooms.map((classroom, index) => (
        <ClassroomItem
          key={index}
          classroom={classroom}
          index={index}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  )
}
