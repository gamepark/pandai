import { isEnumValue } from '@gamepark/rules-api';

export enum PandaiCardType {
    CHAIR = 1,
    PORCUPINE,
    FRUITS,
    CAGE,
    TIGER,
    WHITE_TIGER,
    GREEN_PANDAI,
    YELLOW_PANDAI,
    PURPLE_PANDAI,
    BROWN_PANDAI,
    BLUE_PANDAI,
    RED_PANDAI,
    HAT,
}

export const cards = Object.values(PandaiCardType).filter<PandaiCardType>(isEnumValue);

export const forestDeckContent: Record<PandaiCardType, number> = {
    [PandaiCardType.CHAIR]: 3,
    [PandaiCardType.PORCUPINE]: 6,
    [PandaiCardType.FRUITS]: 5,
    [PandaiCardType.CAGE]: 0,
    [PandaiCardType.TIGER]: 3,
    [PandaiCardType.WHITE_TIGER]: 1,
    [PandaiCardType.GREEN_PANDAI]: 1,
    [PandaiCardType.YELLOW_PANDAI]: 1,
    [PandaiCardType.PURPLE_PANDAI]: 1,
    [PandaiCardType.BROWN_PANDAI]: 1,
    [PandaiCardType.BLUE_PANDAI]: 1,
    [PandaiCardType.RED_PANDAI]: 1,
    [PandaiCardType.HAT]: 2,
};

export const meadowDeckContent: Record<PandaiCardType, number> = {
    [PandaiCardType.CHAIR]: 8,
    [PandaiCardType.PORCUPINE]: 5,
    [PandaiCardType.FRUITS]: 4,
    [PandaiCardType.CAGE]: 4,
    [PandaiCardType.TIGER]: 0,
    [PandaiCardType.WHITE_TIGER]: 0,
    [PandaiCardType.GREEN_PANDAI]: 1,
    [PandaiCardType.YELLOW_PANDAI]: 1,
    [PandaiCardType.PURPLE_PANDAI]: 1,
    [PandaiCardType.BROWN_PANDAI]: 0,
    [PandaiCardType.BLUE_PANDAI]: 0,
    [PandaiCardType.RED_PANDAI]: 0,
    [PandaiCardType.HAT]: 2,
};
