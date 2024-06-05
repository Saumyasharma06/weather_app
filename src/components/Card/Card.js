import "./Card.css"
// import Cloud from "../../assets/cloud.png"

function Card (){
    return(

 <div className="card">
    <input type="text" className="search"></input>
    <h1 className="cityname">City</h1>
    {/* <img src={Cloud} className="image"></img> */}
    <p className="temp">28<sup>o</sup></p>
 </div>
    );
}

export default Card;