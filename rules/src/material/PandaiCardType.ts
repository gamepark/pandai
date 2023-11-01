import { isEnumValue } from '@gamepark/rules-api'

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

export const cards = Object.values(PandaiCardType).filter<PandaiCardType>(isEnumValue)
