import { PlayingCardModel } from "@/models"



export const PlayingCardView: React.FC<PlayingCardModel> = ({ suit, rank }) => {
  return (
    <div>
      {rank} of {suit}
    </div>
  )
}