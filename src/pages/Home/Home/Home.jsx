import Banner from "../Banner/Banner";
import ListPets from "../ListPets/ListPets";
import PetsFeatures from "../PetsFeatures/PetsFeatures";
import PetsHeathCheck from "../PetsHeathCheck/PetsHeathCheck";
import SaleOff from "../SaleOff/SaleOff";
import PetPresentations from "./PetPresentations/PetPresentations";
import Pets from "./Pets/Pets";


const Home = () => {
    return (
        <>
           <Banner></Banner>
           <Pets></Pets>
           <ListPets></ListPets>
           <PetPresentations></PetPresentations>
           <SaleOff></SaleOff>
           <PetsHeathCheck></PetsHeathCheck>
           <PetsFeatures></PetsFeatures>
        </>
    );
};

export default Home;