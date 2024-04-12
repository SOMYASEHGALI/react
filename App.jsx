import "./App.css";
//import Title from "./Title.jsx";
import {Title} from "./Title.jsx";
import Product from "./product.jsx";
import Producttab from "./Producttab.jsx";
//can name as title2 also

function Description(){
  return <h3>i am des</h3>
}
function App(){
  return (
  <Producttab/>
   
  );
  }
export default App;

//comp ko render bhi karna hoga
//to render <title></title> or <title/
//ACTUALLY HAR COMP KI ALAG FILE HOTI HAI
//func ka start letter capital
//named export export {title}
//if not want to create extra node 
//<>  </>

