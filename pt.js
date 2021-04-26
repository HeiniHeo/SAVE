let obj = {
    avante: {
        engine: 'v1'
    },
    sonata: {
        engine: 'v2'
    },
}

console.log(obj.avante.engine);


let obj2 = [
    {
        name: 'avante',
        engine: 'v0',
        handel: 'circle'
    },
    {
        name: 'sonata',
        engine: 'v1',
        handle: 'triangle'
    },
    {
        name: 'granger',
        engine: 'v2',
        handle: 'squaer'
    }
]

obj2.forEach((ele,i)=>{
    console.log(`each engine = ${ele.engine}`);
})

for(j=0; j<obj2.length; j++){
    console.log(`for문으로 = ${obj2[j].engine}`)
}


let obj3 = {
    avante: ['v1', { handle: 'circle' }, '4wheel'],
    sonata: ['v2', { handle: 'triangle' }, '5wheel'],
    granger: ['v3', { handle: 'square' }, '6wheel'],
    genesis: function () {
        console.log('aaa');
    }
}

console.log(obj3.sonata[1].handle);
console.log(obj3.genesis()); //undefined는 왜 찍히는 거지


let obj4 = [
    {
        idx: 2,
        subject: 'adsfasdf ',
        board_name: 'writer',
        content: 'adsfdfsafdasdfsad',
        today: '2021-04-26',
        hit: 6
    },
    {
        idx: 3,
        subject: 'title',
        board_name: 'writer',
        content: '4ㅇㅁㄹ5ㅁ4ㅇㄴㄹ54ㅁㄴㅇ6ㄹ',
        today: '2021-04-26',
        hit: 2
    },
    {
        idx: 4,
        subject: 'hello hello',
        board_name: 'bangga',
        content: 'naeyong\r\nnaeyong\r\n\r\nsujeong sujeong',
        today: '2021-04-26',
        hit: 5
    }
]

// obj4.forEach((ele,num)=>{
//     console.log(num,ele);
// });


// for (i = 0; i <obj4.length; i++) {
//     console.log(obj4[i]);
// }