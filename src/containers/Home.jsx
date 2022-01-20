import React from 'react';
import Search from '../components/Search';
import swal from 'sweetalert';



const Home = () => {

  const HandleClick = () =>{ 
    swal("A wild Pikachu appeared! What do you want to do?", {
      buttons: {
        cancel: "Run away!",
        catch: {
          text: "Throw Pokéball!",
          value: "catch",
        },
        defeat: true,
      },
    })
    .then((value) => {
      switch (value) {
     
        case "defeat":
          swal("Pikachu fainted! You gained 500 XP!");
          break;
     
        case "catch":
          swal("Gotcha!", "Pikachu was caught!", "success");
          break;
     
        default:
          swal("Got away safely!");
      }
    });
  }
    return ( 

      <>
     
      <Search />
     
     <button onClick={()=>HandleClick()}>Click me</button>
     
     
    </>
  
    );
}


export default Home;