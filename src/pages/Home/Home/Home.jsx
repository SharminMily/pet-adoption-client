import Banner from "../Banner/Banner";
import PetsHeathCheck from "../PetsHeathCheck/PetsHeathCheck";
import SaleOff from "../SaleOff/SaleOff";
import PetPresentations from "./PetPresentations/PetPresentations";
import Pets from "./Pets/Pets";


const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Pets></Pets>
           <PetPresentations></PetPresentations>
           <SaleOff></SaleOff>
           <PetsHeathCheck></PetsHeathCheck>
        </>
    );
};

export default Home;