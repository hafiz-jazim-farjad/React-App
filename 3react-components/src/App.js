import './App.css';
import Image from "./Componenets/Image";
function App() {
  let link = 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?b=1&s=612x612&w=0&k=20&c=07SAQPb33q39bTswXx3DsQWU0Mwnuvs2GxigTlLo9Lg='

  return (
    <>
    <h2> this is a image components .....  </h2>
      <Image width={200} height={200} imageUrls={`${link} , ${link} , ${link} , ${link} `} />
    </>

  );
}

export default App;