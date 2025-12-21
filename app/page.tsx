import Image from "next/image";

import About from  "./about/page";
import {Button} from "@/component/Button";
import {Submit} from "@/component/Submit";
import {Textarea} from "@/component/Textarea";
import {Apply} from "@/component/Apply";
export default function Home() {
  return (
    <div className="bg-red-50">
      <div>
        <Button/>
        <About/>
        <Submit/>
        <Textarea/>
        <Apply/>
      </div>
      <h1>Ebad</h1>
    </div>
  )}