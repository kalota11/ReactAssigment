import Image from "next/image";
import About from "./about/page";
import { MyButton } from "@/component/Button";
import { Submit } from "@/component/Submit";
import { Textarea } from "@/component/Textarea";
import { Apply } from "@/component/Apply";
import { User } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <MyButton />
        <Apply />
        <Submit />
        <Textarea />
        <h1>{User.Name}</h1>
        <h1>{User.Status}</h1>
        <h1>{User.Age}</h1>
      </div>
      <h1>Ebad</h1>
      <Link href="/about" className="text-red-500 text-[12px] font-bold">About Us</Link>
      <br/>
      <Link href="/services/webdevelopment" className="text-red-500 text-[12px] font-bold">Web Development</Link>
    </div>
  );
}