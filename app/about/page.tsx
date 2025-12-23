import { MyButton } from "@/component/Button";
import { Submit } from "@/component/Submit";
import { Textarea } from "@/component/Textarea";
import { Apply } from "@/component/Apply";
import { User } from "@/data";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div>
        <MyButton/>
        <Apply/>
        <Submit/>
        <Textarea/>
      <Link href="/services/webdevelopment">Web Development</Link>
      </div>
      <p>
        THIS IS PRATICE FOR ROAT
      </p>
    </div>
  )}