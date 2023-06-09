import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import Navbar from './components/Navbar'
import GenreList from './components/GenreList'
import { useState } from 'react';
import { Genre } from './hooks/UseGeneres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/UseGames';

function App() {
  const [selectedGenre , setSelectedGenre]=useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] =useState<Platform | null>(null);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>

    <GridItem area="nav">
      <Navbar />
    </GridItem>
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
      </GridItem>
    </Show>

    <GridItem area="main" >
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>
      <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
    </GridItem>
  </Grid >
}

export default App
