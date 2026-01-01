
interface Personprops {
    name : string,
    age : number
}
export function Person(props :  Personprops) {
  return (
    <div>
       <h1>{props.name}</h1>
        <h2>{props.age}</h2>
    </div>
  );
}