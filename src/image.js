import React,{useState,useEffect} from 'react';

function ImageContant () {
    const [count,newState] = useState(5);
    const imageArray=[];
    for(let i=1;i<=count;i++){
     imageArray.push(`https://picsum.photos/id/${i}/200/200`);
    }
    const img =imageArray.map((e) =>{
      return(<img src={e} key={e} alt="pics"></img>);
    })
    return (
      <div>
        <div class="header">
          <h1>Gallery</h1>
          <input type="number" value={count} id="number" onChange={event => newState(event.target.value)} ></input>
        </div>
        <div>
          {img}
        </div>      
      </div>
    );
}
export default ImageContant;