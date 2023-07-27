import React from 'react'
import { Game } from "../hooks/UseGames"
import { Image, Card, CardBody, Heading, Text, HStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'


interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card width='300px' borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(plat => plat.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}></Emoji></Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard