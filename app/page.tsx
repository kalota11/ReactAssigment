import Image from "next/image";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">WELCOME TO MY PORTFOLIO</h1>
      </main>
      <Card 
  title="HTML & CSS"
  description="Responsive and clean layouts banata hoon."
/>

<Card 
  title="JavaScript"
  description="Website me logic aur interactivity add karta hoon."
/>

    </div>
  );
}
