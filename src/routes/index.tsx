import { HandView } from '@/components'
import { HandModel } from '@/models'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const HandMock: HandModel = {
    cards: [
      {
        suit: 'hearts',
        rank: 'ace',
      },
      {
        suit: 'hearts',
        rank: 'king',
      },
      {
        suit: 'hearts',
        rank: 'queen',
      },
      {
        suit: 'hearts',
        rank: 'jack',
      }
    ]
  }


  return (
    <div className="p-2">
      <HandView {...HandMock} />
    </div>
  )
}
