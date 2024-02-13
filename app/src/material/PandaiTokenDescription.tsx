import { RoundTokenDescription } from '@gamepark/react-game'
/*import { MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { css } from '@emotion/react'*/

import { css } from '@emotion/react'
import { PandaiColor } from '@gamepark/pandai/material/PandaiColor'
import Images from '../images/Images'



export class PandaiTokenDescription extends RoundTokenDescription {
	ratio = 1
	diameter = 4
	width = this.diameter
	images = {
		[PandaiColor.Blue]: Images.PandaiColorBlue,
		[PandaiColor.Brown]: Images.PandaiColorBrown,
		[PandaiColor.Green]: Images.PandaiColorGreen,
		[PandaiColor.Purple]: Images.PandaiColorPurple,
		[PandaiColor.Red]: Images.PandaiColorRed,
		[PandaiColor.Yellow]: Images.PandaiColorYellow
	}

	getFrontExtraCss(itemId:PandaiColor) {
		const backgroundColor = pandaiColorCode[itemId]
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