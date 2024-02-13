/** @jsxImportSource @emotion/react */
import { Player } from '@gamepark/react-client'
import { PlayerPanel } from '@gamepark/react-game'
import { FC, HTMLAttributes } from 'react'
import { PlayerPanelPandais } from './PlayerPanelPandais'

type PandaiPlayerPanelProps = {
  player: Player
} & HTMLAttributes<HTMLDivElement>

export const PandaiPlayerPanel: FC<PandaiPlayerPanelProps> = (props) => {
  const { player, ...rest } = props
  return (

    <PlayerPanel key={player.id} playerId={player.id} {...rest}>
      <PlayerPanelPandais player={player} />
    </PlayerPanel>
  )

}