interface  ServiceContactprops{
  name : string,
  age : number
}

export default function ServiceContactprops(props :  ServiceContactprops) {
  return (
    <div>
     <div>
      <h1>{props.name}</h1>
        <h2>{props.age}</h2>
     </div>
    </div>
  )}