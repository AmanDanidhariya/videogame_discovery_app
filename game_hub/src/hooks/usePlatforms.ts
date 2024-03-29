import useData from "./UseData";
import platforms from "../data/platform"
interface Platform{
    id: number;
    name: string;
    slug: string;

}

// const usePlatforms = () =>useData<Platform>("platforms/lists/parents");
//make static data
const usePlatforms = () =>({data: platforms, error: null});
export default usePlatforms;