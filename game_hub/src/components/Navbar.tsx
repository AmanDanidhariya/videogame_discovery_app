import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp";
import ColorSwitch from './ColorSwitch';
import SearchInput from './SearchInput';

interface Props {
    onSearch : (searchText: string) => void;
}

const Navbar = ({onSearch}: Props) => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px'></Image>
            <SearchInput onSearch={onSearch}/>
            <ColorSwitch />
        </HStack >
    )
}

export default Navbar