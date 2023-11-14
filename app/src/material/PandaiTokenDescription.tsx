import { RoundTokenDescription } from '@gamepark/react-game'
/*import { MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { css } from '@emotion/react'*/

import { css } from '@emotion/react'
import { PandaiColor } from '@gamepark/pandai/material/PandaiColor'
import card1 from '../images/tokens/token-blue.png'
import card2 from '../images/tokens/token-brown.png'
import card3 from '../images/tokens/token-green.png'
import card4 from '../images/tokens/token-purple.png'
import card5 from '../images/tokens/token-red.png'
import card6 from '../images/tokens/token-yellow.png'

export class PandaiTokenDescription extends RoundTokenDescription {
	ratio = 1
	diameter = 4
	width = this.diameter
	images = {
		[PandaiColor.Blue]: card1,
		[PandaiColor.Brown]: card2,
		[PandaiColor.Green]: card3,
		[PandaiColor.Purple]: card4,
		[PandaiColor.Red]: card5,
		[PandaiColor.Yellow]: card6
	}

	getFrontExtraCss(itemId:PandaiColor) {
		const backgroundColor = pandaiColorCode[itemId]
    console.log("backgroundColor1",backgroundColor)
		return backgroundCss(backgroundColor)
	}
}

export const pandaiTokenDescription = new PandaiTokenDescription()

const backgroundCss = (color: string) => css`
  background-color: ${color}
`

const pandaiColorCode: Record<PandaiColor, string> = {
	[PandaiColor.Red]: '#f46450',
	[PandaiColor.Brown]: '#7a6148',
	[PandaiColor.Blue]: '#73b4e6',
	[PandaiColor.Green]: '#85d050',
	[PandaiColor.Yellow]: '#fab039',
	[PandaiColor.Purple]: '#af6ebe'
}