import Image from "next/image";
import About from "./about/page";
import { MyButton } from "@/component/Button";
import { Submit } from "@/component/Submit";
import { Textarea } from "@/component/Textarea";
import { Apply } from "@/component/Apply";
import { Navbar } from "@/component/Navb";
import { User } from "@/data";
import { newData } from "@/data";
import { newDatas } from "@/data";
import { Person } from "@/component/Person";
import ServiceContactprops from "./services/Contact/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <MyButton />
        <Apply />
        <Submit />
        <Textarea />
        <Navbar/>
        <About name = "Ebad" age={13}/>
        <Person name = "Ubaid" age={15}/>
        <ServiceContactprops name="Imran" age={48}/>
        <div>
          <>
          {newData.map((data,index) => {
              return(
                <div key={index}>
                  <h1>{data.id}</h1>
                  <h2>{data.name}</h2>
                  <h3>{data.age}</h3>
                </div>
              )
          })}
          </>
        </div>
        <div>
           <>
          {newDatas.map((Datas,index) => {
              return(
                <div key={index}>
                  <h1 className="text-red-800 font-bold text-[15px]">{Datas.id}</h1>
                  <h2>{Datas.name}</h2>
                  <h3>{Datas.age}</h3>
                </div>
              )
          })}
          </>
        </div>
      </div>
      <Link href="/about" className="text-red-500 text-[12px] font-bold">About Us</Link>
      <br/>
      <Link href="/services/Contact" className="text-red-500 text-[12px] font-bold">Contact</Link>
    </div>
  );
}