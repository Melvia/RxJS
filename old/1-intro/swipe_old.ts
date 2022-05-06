import {fromEvent, Observable, zip, merge } from "rxJS";
import { pluck, tap, map} from "rxjs/operators";

/*
fromEvent<TouchEvent>(document, 'touchstart')
    .pipe(
        tap(console.log),
        map((event: TouchEvent)=> {
            return event.changedTouches[0].clientX
        })      
    )
    .subscribe((v)=>console.log(v))

fromEvent<TouchEvent>(document, 'touchend');
*/
/*
fromEvent<TouchEvent>(document, 'touchstart')
.pipe(
    tap(console.log),
    map((event:TouchEvent) => {
        return event.changedTouches[0].clientX
    })
)
.subscribe((v) => {
    console.log(v);
})
fromEvent<TouchEvent>(document, 'touchend');



zip(
    getX(fromEvent<TouchEvent>(document, 'touchstart')),
    getX(fromEvent<TouchEvent>(document, 'touchend'))
).subscribe((v)=>{console.log(v);
})

function getX(source$ :Observable<TouchEvent>) {
    return source$
    .pipe(        
        map((event:TouchEvent) => {
            return event.changedTouches[0].clientX
        })
    )
}

*/

swipe(zip(
    getX(fromEvent<TouchEvent>(document, 'touchstart'), 
        fromEvent<MouseEvent>(document, 'mousedown')
        ),
    getX(fromEvent<TouchEvent>(document, 'touchend'),
    fromEvent<MouseEvent>(document, 'mouseup')
    )
    
))
.subscribe((direction)=> {
        if (direction < 0) {
            console.log('Swipe left');
            return;
        }
    console.log('Swipe right');
    });

    

function getX(source1$: Observable<TouchEvent>, source2$: Observable<MouseEvent>) {
    return merge (source1$, source2$) 
    .pipe(
        map((event: TouchEvent | MouseEvent) => {
            if (event instanceof TouchEvent) {return event.changedTouches[0].clientX}
            return event.clientX;
        })
    );
}

function swipe(source$:Observable<[number, number]>) {
    return source$
    .pipe(map(([x,y])=>  y - x ))
}


