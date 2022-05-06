import {fromEvent, Observable, zip} from "rxJS";
import {map, tap} from "rxjs/operators";


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


/*
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