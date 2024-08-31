import React from "react";
import {desc} from "../data";

function Description() {
    return (
    //     <div>
    //     <div id="description">
        
    //   </div>
    <div class='wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='column-one'>
      <div id="dual-color">
        <img className= "description-img" src={desc[0].img}/>
        </div>
      <div id="desc_text">
      <h2 className="card-title desc-title">{desc[0].title}</h2>
      <p>{desc[0].desc}</p>
      </div>
      </div>
    </div>
    <div class='column'>
      <div class='column-two'>
      <div id="dual-color">
        <img className= "description-img" src={desc[1].img}/>
        </div>
      <div id="desc_text">
      <h2 className="card-title desc-title">{desc[1].title}</h2>
      <p>{desc[1].desc}</p>
      </div>
      </div>
    </div>
  </div>
  <div class='row'>
    <div class='column'>
      <div class='column-one'>
      <div id="dual-color">
        <img className= "description-img" src={desc[2].img}/>
        </div>
        <div id="desc_text">
      <h2 className="card-title desc-title">{desc[2].title}</h2>
      <p>{desc[2].desc}</p>
      </div>
      </div>
    </div>
    <div class='column'>
      <div class='column-two'>
      <div id="dual-color">
        <img className= "description-img" src={desc[3].img}/>
        </div>
        <div id="desc_text">
      <h2 className="card-title desc-title">{desc[3].title}</h2>
      <p>{desc[3].desc}</p>
      </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Description;


