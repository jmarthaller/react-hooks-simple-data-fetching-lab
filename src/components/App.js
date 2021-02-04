// create your App component here
import React, { useState, useEffect } from 'react';


function App() {

  const [dogPic, setDogPic] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);


     useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setDogPic(data.message);
            setIsLoaded(true);
        });
      }, []);


      if (!isLoaded) {
          return <h3>Loading...</h3>;
      } else {
        return  <img src={dogPic} alt="A Random Dog"/>
      }
        //   {isLoaded ? null : <p>Loading...</p> }
    
      
    
   
}



export default App;