import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ImageContant from'./image';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [count, setState] = useState(6);
  const [image, setImage] = useState('');

  const newcount = (e) => {
    debugger;
    const inCount = e.target.value;
    setState(inCount);
  }
useEffect(()=>{
  debugger;
    imageSet();
  },[count]);
  const imageSet = ()=> {
    debugger;
    const imageAray = [];
        for(let i=0; i<count ; i++ ){
          imageAray.push(`https://picsum.photos/id/1${i}/200/300`);
        }
        var img =imageAray.map((e) =>{
          return(<img key={e} src={e}></img>)
        })
       setImage(img)
  }
  return(
    <div>
        <h1>My Photo Gallery</h1>
        <input id="number" value={count} type='number' onChange={newcount}></input>
       <div id="imgDiv">
        {image}
       </div>
    </div>
  )
  
}

// const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' }
// const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup)

// class App extends React.Component {
//   constructor(props) {
//     debugger;
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.fileInput = React.createRef();
//   }
//   handleSubmit(event) {
//     debugger;
//     event.preventDefault();
//     alert(
//       `Selected file - ${this.fileInput.current.files[0].name}`
//     );
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Upload file:
//           <input type="file" ref={this.fileInput} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//         <FontAwesomeIcon icon={coffeeIconDefinition} />
//       </form>
//     );
//   }
// }

export default App;
