import React from 'react'
import { Game } from "../hooks/UseGames"
import { Image, Card, CardBody, Heading, Text, HStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'


interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card width='300px' borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(plat => plat.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard