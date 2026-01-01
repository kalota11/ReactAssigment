import Image from "next/image";
import About from "./about/page";
import { MyButton } from "@/component/Button";
import { Submit } from "@/component/Submit";
import { Textarea } from "@/component/Textarea";
import { Apply } from "@/component/Apply";
import { User } from "@/data";
import { Person } from "@/component/Person";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <MyButton />
        <Apply />
        <Submit />
        <Textarea />
        <About name = "Ebad" age={13}/>
        <Person name = "Ubaid" age={15}/>
      </div>
      <h1>Ebad</h1>
      <Link href="/about" className="text-red-500 text-[12px] font-bold">About Us</Link>
      <br/>
      <Link href="/services/Contact" className="text-red-500 text-[12px] font-bold">Contact</Link>
    </div>
  );
}