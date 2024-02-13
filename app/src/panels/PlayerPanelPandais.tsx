/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PandaiRules } from '@gamepark/pandai/PandaiRules'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { Player } from '@gamepark/react-client'
import { MaterialComponent, useRules } from '@gamepark/react-game'
import { FC } from 'react'

type PlayerPanelPandaisProps = {
	player: Player
}

export const PlayerPanelPandais: FC<PlayerPanelPandaisProps> = (props) => {
	const { player } = props
	const rules = useRules<PandaiRules>()!
	const tokens = rules
		.material(MaterialType.PandaiToken)
		.location((location) => location.type === LocationType.PandaiTokenEarnedStock && location.player === player.id)
		.getItems()

	return (
		<div css={tokenList}>
			{tokens.map((token) => {
				return <MaterialComponent key={token.id} css={mini} type={MaterialType.PandaiToken} itemId={token.id} />
			})}
		</div>
	)
}

const mini = css`
  font-size: 1.4em;
`
const tokenList = css`
  position: absolute;
  top: 7em;
  left: 1em;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1em;
`
