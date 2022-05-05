/*
const sequence = new Promise((res)=> {let count=1;
setInterval(()=>{res(count++);})})


sequence.then((v)=>console.log(v));
sequence.then((v)=>console.log(v));
*/

import { interval} from "rxjs";

interval(1000).subscribe((v:number)=>{
    console.log(v)
})