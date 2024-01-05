/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Player } from '@gamepark/react-client'
import { PlayerPanel, useRules } from '@gamepark/react-game'
import { FC, HTMLAttributes } from 'react'
import { PlayerPanelCounter } from './PlayerPanelCounter'
import { PandaiRules } from '@gamepark/pandai/PandaiRules'

type PandaiPlayerPanelProps = {
  player: Player
} & HTMLAttributes<HTMLDivElement>

export const PandaiPlayerPanel: FC<PandaiPlayerPanelProps> = (props) => {
  const { player, ...rest } = props
  const rules = useRules<PandaiRules>()!
  return (

    <PlayerPanel key={player.id} playerId={player.id} {...rest}>
      <div css={indicators()}>
        <PlayerPanelCounter value={rules?.getScore(player.id)!} icon={faStar} />
      </div>
    </PlayerPanel>
  )

}

const indicators = () => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3.6em;
  transition: 0.2s;
  flex-wrap: wrap;
`
