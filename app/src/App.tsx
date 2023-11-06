/** @jsxImportSource @emotion/react */
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { RuleId } from '@gamepark/pandai/rules/RuleId'
import { FailuresDialog, FullscreenDialog, LoadingScreen, MaterialHeader, Menu, useGame } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api'
import { useEffect, useState } from 'react'
import GameDisplay from './GameDisplay'
import { PandaMoveHeader } from './headers/PandaMoveHeader';
import { ChooseCardTypeHeader } from './headers/ChooseCardTypeHeader'
import { HatRuleHeader } from './headers/HatRuleHeader'

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
			<LoadingScreen display={loading} author="Igor Polouchine" artist="Paul Mafayon" publisher="Origames" developer="Séverine Kamycki (mizutismask)" />
			<MaterialHeader rulesStepsHeaders={RulesHeaders} loading={loading} />
			<Menu />
			<FailuresDialog />
			<FullscreenDialog />
		</>
	);
}

const RulesHeaders: Partial<Record<RuleId, () => ReactJSXElement>> = {
	[RuleId.MovePanda]: PandaMoveHeader,
	[RuleId.ChooseCardType]: ChooseCardTypeHeader,
	[RuleId.HatRule]: HatRuleHeader,
};