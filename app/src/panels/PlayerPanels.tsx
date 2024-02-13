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
			{players.map((player) => (
				<PandaiPlayerPanel key={player.id} player={player} color={playerColorCode[player.id]} css={panelPosition(player.id)} />
			))}
		</>
	)
}
const panelPosition = (color: number) =>
	css`
  position: absolute;
  ${horizontal(color)}:  1em;
  ${vertical(color)}: 1em;
  width: 28em;
  height: 14em;
`
const horizontal = (color: PlayerColor) => (color === PlayerColor.Blue || color === PlayerColor.Black) ? "right" : "left"
const vertical = (color: PlayerColor) => (color === PlayerColor.Pink || color === PlayerColor.Black) ? "top" : "bottom"

export const playerColorCode: Record<PlayerColor, string> = {
	[PlayerColor.Black]: 'darkslategrey',
	[PlayerColor.Blue]: 'blue',
	[PlayerColor.Orange]: 'orange',
	[PlayerColor.Pink]: 'hotpink'
}
