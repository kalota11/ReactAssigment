import Image from "next/image";

import About from  "./about/page"
import {Button} from "@/component/Button"
export default function Home() {
  return (
    <div className="bg-red-50">
      <div>
        <Button/>
        <About/>
      </div>
      <h1>Ebad</h1>
    </div>
  )}