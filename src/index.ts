import { interval, Observable, Subscriber } from "rxjs";


function doNothing(source$: Observable<any>) {
    return source$
}

//на самом деле мы подписались на этот поток
function toText(source$:Observable<any>) {
    return new Observable(subscriber => {
        subscriber.next('RxJS is Awesome!!!')
        subscriber.complete();
    })
}

class DoubleSubscriber extends Subscriber<number>{
    next(value:number):void {
        super.next(value * 2);
    }
}

function double(source$:Observable<any>) {
    const o$ = new Observable();
    o$.source = source$;
    o$.operator = {
        call(subscriber:Subscriber<unknown>, source: any): void {
            source.subscribe(new DoubleSubscriber(subscriber))
        }
    }
    return o$;
}

interval(1000)
.pipe(
    double
)
.subscribe((v)=>{
    console.log(v)
}, ()=>{}, ()=>{console.log('complete')})
