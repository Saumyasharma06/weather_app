import { useState } from "react";
const Test=()=>{
    const [count,setCount]=useState(0);
    const change=()=>{
        setCount(count+1)
    }

return(
<div>
<h1>{count}</h1>
<button onClick={change}>Button</button>
</div>

)
}
export default Test