type User = {
    Name : string
    Age : number
    Status : string
}

export const User:User = {
    Name : "Ebad",
    Age:12,
    Status:"student"
}

interface Data {
  id: number,
  name : string,
  age  : number
}

export  const newData : Data[] = [{
    id : 1,
    name : "Ebad",
    age : 13
},
{
    id : 2,
    name : "Imran",
    age : 48
},
{
    id : 3,
    name : "Ubaid",
    age : 15
}
]

interface Datas {
  id: number,
  name : string,
  age  : number,
  gender : string
}

export  const newDatas : Datas[] = [{
    id : 1,
    name : "Saib",
    age : 18,
    gender : "Male"
},
{
    id : 2,
    name : "Muhammad",
    age : 17,
    gender : "Male"
},
{
    id : 3,
    name : "Huzaifa",
    age : 20,
    gender : "Male"
}
]