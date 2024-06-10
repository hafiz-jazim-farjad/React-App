import './App.css';
import { useEffect } from "react";
import { db } from "./databse/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {

  const addDataToFireBase = () => {
    let data = {
      name: 'jazim',
      phone: '123456',
      timing: '2-4',
      days: 'MWF'
    }

    let users = collection(db, 'users')
    addDoc(users, data)
    alert('data send successfully')
  }

  useEffect(() => { getUsersData() }, [])


  const getUsersData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      alert('Data Get successfully')
    });
  }

  return (
    <>
      <h1>My First react App With Firebase</h1>
      <button onClick={addDataToFireBase}> Add data </button>
    </>
  );
}

export default App;