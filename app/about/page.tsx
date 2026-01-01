import { MyButton } from "@/component/Button";
import { Submit } from "@/component/Submit";
import { Textarea } from "@/component/Textarea";
import { Apply } from "@/component/Apply";
import { User } from "@/data";
import Link from "next/link";

interface AboutProps{
  name : string,
  age : number
}
export default function About(props: AboutProps) {
  return (
    <div>
      <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
      <Link href="/services/Contact">Contact</Link>
      </div>
      <p>
        THIS IS PRATICE FOR ROAT
      </p>
    </div>
  )}