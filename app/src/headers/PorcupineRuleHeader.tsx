/** @jsxImportSource @emotion/react */

import { useTranslation } from 'react-i18next';

export const PorcupineRuleHeader = () => {
	const { t } = useTranslation();
	return <>{t('header.porcupine.move')}</>;
};
