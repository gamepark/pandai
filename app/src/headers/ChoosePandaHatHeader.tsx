/** @jsxImportSource @emotion/react */

import { useTranslation } from 'react-i18next'

export const ChooseNewHatPandaHeader = () => {
	const { t } = useTranslation(); //===const  translation = useTranslation(); const t=translation.t
	return <>{t('header.choose.hat.panda.move')}</>;
};
