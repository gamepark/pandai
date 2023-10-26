/** @jsxImportSource @emotion/react */
import { GameOptionsSpec } from '@gamepark/pandai/PandaiOptions'
import { PandaiRules } from '@gamepark/pandai/PandaiRules'
import { PandaiSetup } from '@gamepark/pandai/PandaiSetup'
import { GameProvider, MaterialGameAnimations, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import translations from './translations.json'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="pandai" Rules={PandaiRules} optionsSpec={GameOptionsSpec} GameSetup={PandaiSetup}
                  material={Material} locators={Locators} animations={new MaterialGameAnimations()}>
      <App/>
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)
