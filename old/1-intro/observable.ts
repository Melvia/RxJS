/*
import { Observable, Subscriber } from "rxjs"

const sequence$ = new Observable((subscriber:Subscriber<unknown>)=>{
    let count = 1;
    const intervalId = setInterval(()=> {
        if (count % 5 === 0) {
            clearInterval(intervalId);
            subscriber.complete();
            return}
        subscriber.next(count++);        
    }, 1000) 
    return () => {
        console.log('unsubscribe');
        clearInterval(intervalId);
    }
});

const subscription = sequence$.subscribe((v)=>{console.log(v);
    }, () => {},
    ()=> {console.log('completed');}
)


setInterval(()=>{
    subscription.unsubscribe();
}, 3000)
*/

import { interval, timeout} from "rxjs";

const sequence$ = interval(1000) ;
const sub1 = sequence$.subscribe((v: number)=> console.log('sub 1', v));

sequence$.subscribe((v: number)=> console.log('sub 2', v));

setTimeout(()=>{
    sub1.unsubscribe();
}, 3000)