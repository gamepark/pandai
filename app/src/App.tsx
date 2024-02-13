/** @jsxImportSource @emotion/react */
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { RuleId } from '@gamepark/pandai/rules/RuleId'
import { FailuresDialog, FullscreenDialog, LoadingScreen, MaterialHeader, Menu, useGame } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api'
import { useEffect, useState } from 'react'
import GameDisplay from './GameDisplay'
import { MovePandaHeader } from './headers/MovePandaHeader';
import { ChooseCardTypeHeader } from './headers/ChooseCardTypeHeader';
import { HatRuleHeader } from './headers/HatRuleHeader';
import { PorcupineRuleHeader } from './headers/PorcupineRuleHeader'
import { FruitsRuleHeader } from './headers/FruitsRuleHeader'
import { ChooseNewHatPandaHeader } from './headers/ChoosePandaHatHeader'

export default function App() {
	const game = useGame<MaterialGame>();
	const [isJustDisplayed, setJustDisplayed] = useState(true);
	useEffect(() => {
		setTimeout(() => setJustDisplayed(false), 2000);
	}, []);
	const loading = !game || isJustDisplayed;
	return (
		<>
			<GameDisplay />
			<LoadingScreen display={loading} author="Igor Polouchine" artist="Paul Mafayon" publisher="Origames" developer="Séverine Kamycki (Mizutismask)" />
			<MaterialHeader rulesStepsHeaders={RulesHeaders} loading={loading} />
			<Menu />
			<FailuresDialog />
			<FullscreenDialog />
		</>
	);
}

const RulesHeaders: Partial<Record<RuleId, () => ReactJSXElement>> = {
	[RuleId.MovePanda]: MovePandaHeader,
	[RuleId.PorcupineCardRule]: PorcupineRuleHeader,
	[RuleId.FruitsRule]: FruitsRuleHeader,
	[RuleId.ChooseCardType]: ChooseCardTypeHeader,
	[RuleId.HatRule]: HatRuleHeader,
	[RuleId.ChooseNewHatPandaRule]: ChooseNewHatPandaHeader,
};