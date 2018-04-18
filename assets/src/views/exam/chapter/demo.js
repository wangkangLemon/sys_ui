import { request } from "http";

var data = [
    {
        subject:'timu',
        img:'https://',
        option:[
            {name:'A',cotnent:'',correct:1},
            {name: 'B', cotnent: '', correct: 0},
        ]
    },
    {},
    {}
]

request('/a/b',{
    type:'A4',
    value: JSON.stringify(data)
})
