import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import BoxColor from "./components/BoxColor";
import Random from "./components/Random";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from './components/LikeButton'
import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import FaceBook from "./components/FaceBook";
import SignupPage from "./components/SignupPage";
import RGBColorPicker from "./components/RGBColorPicker";


function App() {
const idCardList = [
  
  {
    lastName: "Doe", 
    firstName:"John", 
    gender: "male", 
    height: 178, 
    birth: "1992-07-14", 
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName:'Delores ',
    firstName: 'Obrien',
    gender:'female',
    height: 172,
    birth: "1988-05-11",
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const creditCardList = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white" 
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222"
  },
  {   
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white" 
  }
];

const driverCardList = [
  {
    name: "Travis Kalanick",
    rating: 4.2,
    img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car: {
      model: "Toyota Corolla Altis",
      licensePlate: "CO42DE"
    }
  },
  {
    name: "Dara Khosrowshahi",
    rating: 4.9,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model: "Audi A3",
      licensePlate: "BE33ER"
    }
  }
]


const min = 0;
const max = 255;

const red = 255;
const green = 0;
const blue = 0;

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard idCard={idCardList[0]} />
      <IdCard idCard={idCardList[1]} />

      <Greetings language="es"/> Paco 

      <Random min={min} max={max} />
      <Random min={1} max={100} />

      <BoxColor r={red} g={green} b={blue} />
      <BoxColor r={128} g={255} b={0} />

      <div className="creditCards">
        <CreditCard creditCard={creditCardList[0]} />
        <CreditCard creditCard={creditCardList[1]} />
        <CreditCard creditCard={creditCardList[2]} />
      </div>

      <Rating children={0} />
      <Rating children={1.49} />
      <Rating children={1.5} />
      <Rating children={3} />
      <Rating children={4} />
      <Rating children={5} />

      <div>
        <DriverCard driverCard={driverCardList[0]} />
        <DriverCard driverCard={driverCardList[1]} />
        
      </div>
      <div className="likeButton">
      <LikeButton />

      <ClickablePicture img="./src/assets/images/noglasses.png" imgClicked="./src/assets/images/glasses.jpg" />
      
      <Dice />

      <Carousel images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
      ]} />

      
      </div>
      <div>
        <NumbersTable limit={19} />

        <FaceBook />

        <SignupPage />

        <br />
        <RGBColorPicker   />
      </div>
      

    </div>
  );
}

export default App;
