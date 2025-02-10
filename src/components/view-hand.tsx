import { HandModel } from "@/models"
import { PlayingCardView } from "./view-playing-card"


export const HandView: React.FC<HandModel> = ({ cards }) => {
  return (
    <div>
      {cards.map((card, i) => (
        <PlayingCardView key={i} {...card}/>
      ))}
    </div>
  )
}