// const p = new Promise((resolve,reject)=>{
//     let a = 23 + 2;
//     if(a === 26){
//         resolve(`Satisfied.`)
//     }
//     else reject(`Rejected`);
// })

// p.then((message)=>console.log(`${message} that a was 26`)
// ).catch((message)=>console.log(`${message} that a was not 26`)).finally(()=>{console.log("Exiting code.");
// });

// function delayedGreeting(name,delay){
//     return new Promise((resolve,reject)=>{
//     resolve({name:name,delay:delay});
// }).then(({name,delay})=>{
//     setTimeout(()=>{console.log(`Hello,${name}`)},delay*1000);
    
// })
// }

// function delayedGreeting(name,delay){
//     return Promise.resolve(({name:name,delay:delay})).then(setTimeout(()=>{console.log(`Hello ,${name}`)},delay*1000))
// };

// delayedGreeting("Niru",5);
//delayedGreeting("Niru",10);

// function double(n){
//     return Promise.resolve(n).then(n=>n*2).then(n => n*2).then(n=>n*2).then(n=>n*2).then(n=>console.log(n));
// }

// double(1);

// function divide(a,b){
//     return new Promise((resolve,reject)=>{
//         b === 0 ? reject() : resolve();
//     }).then(() => console.log(`${a} divided by ${b} is ` + a/b)).catch(() => console.log(`Cannot divide by ${b}`))
// }

// divide(10,0);

// const tasks = [
//   () => Promise.resolve(setTimeout(()=>{},1000)),
//   () => Promise.resolve(setTimeout(()=>{},500)),
//   () => Promise.resolve(setTimeout(()=>{},200)),
// ];

// const taskPromise = tasks.map(taskFunction => taskFunction());

// Promise.all(taskPromise).then((values)=>{
//     console.log(values);
// })