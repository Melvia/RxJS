import { of, from, iif, defer, bindNodeCallback } from "rxjs";
import {ajax, AjaxResponse} from "rxjs/ajax";
/*
const sequence$ = from(
     fetch('https://learn.javascript.ru/courses/groups/api/participants?key=dsodaf') 
     .then((res)=> res.json())
     );

sequence$.subscribe((v: number) => {
    console.log(v)
})
*/
/*
const random = Math.round(Math.random() * 10);
/*
const sequence$ = iif(()=> {
    return random > 5;}, of ('Value > 5'), of('Value < 5'));
    sequence$.subscribe((v:string)=>{
        console.log(v);
})



const sequence$ = defer(()=> {
    return random > 5
    ? random >= 8
    ? of ('Value > 8') 
    : of ('Value > 5 < 8') : of('Value < 5'); })
    sequence$.subscribe((v:string)=>{
        console.log(v);
})


const sequence$ = ajax('https://learn.javascript.ru/courses/groups/api/participants?key=dsodaf');

sequence$.subscribe((v) => {
   console.log(v.response)
})

*/

import fs from 'fs';
import util from 'util';
import path from 'path';
import { map, tap, filter, skip, take, pluck } from "rxjs/operators";
import { interval } from "rxjs";
/*
const promicifiedFileRead = util.promisify(fs.readFile) 
const readdir$ =from( promicifiedFileRead(path.resolve(__dirname, 'text')))
.pipe(
    map((buffer)=>{
        const str = buffer.toString();
        const regExp = />([^<]+)</;
        const matches = regExp.exec(str);
        return matches && matches[1];
    })
)

readdir$.subscribe((v:null|string) => console.log(v))

const readdir$ = bindNodeCallback(fs.readFile)(path.resolve(__dirname, 'text'))
.pipe(
    map((buffer)=>{
        const str = buffer.toString();
        const regExp = />([^<]+)</;
        const matches = regExp.exec(str);
        return matches && matches[1];
    })
)
readdir$.subscribe((v:null|string) => console.log(v))

*/


/*
const sequence1$ = interval(1000);
sequence1$.pipe(
    map((x:number)=> x**2)
    )
.subscribe((v:number)=> console.log(v))


const sequence1$ = interval(1000);
sequence1$
.pipe(
    tap((v)=> {console.log(v);
        return [1,2,3,4]
    }),
    map((x)=> x**2)
  )
  .subscribe((v) => {console.log('Result', v)})



  const sequence1$ = interval(1000);
sequence1$
.pipe(
    map((x)=>({v:x}))),
    tap(()=> {
        return [1,2,3,4]
    }),
    pluck('v'),
    filter((x)=> x%2===0),
    map((x)=> x**2),
    skip(2),
    first()
  )
  .subscribe((v) => {console.log('Result', v)}, ()=>{},
  console.log('completed'))

*/
