/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PlayerColor } from '@gamepark/pandai/PlayerColor'
import { usePlayers } from '@gamepark/react-game'
import { FC } from 'react'
import { PandaiPlayerPanel } from './PandaiPlayerPanel'

export const PlayerPanels: FC<any> = () => {
  const players = usePlayers({ sortFromMe: true })
  return (
    <>
      {players.map((player, index) =>
        <PandaiPlayerPanel key={player.id} player={player} color={playerColorCode[player.id]} css={panelPosition(index)}/>
      )}
    </>
  )
}
const panelPosition = (index: number) => css`
  position: absolute;
  right: 1em;
  top: ${8.5 + index * 16}em;
  width: 28em;
  height: 14em;
`

export const playerColorCode: Record<PlayerColor, string> = {
  [PlayerColor.Black]: 'darkslategrey',
  [PlayerColor.Blue]: 'blue',
  [PlayerColor.Orange]: 'orange',
  [PlayerColor.Pink]: 'hotpink'
}