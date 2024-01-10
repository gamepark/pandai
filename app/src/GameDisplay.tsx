/** @jsxImportSource @emotion/react */
import { GameTable } from '@gamepark/react-game'
import { PlayerPanels } from './panels/PlayerPanels'
import { css } from '@emotion/react'

export default function GameDisplay() {
  return <>
    <GameTable xMin={-38} xMax={38} yMin={-30} yMax={30} css={css`border:2px solid white`}
               margin={{ top: 7, left: 0, right: 0, bottom: 0 }}/>
    <PlayerPanels/>
  </>
}
