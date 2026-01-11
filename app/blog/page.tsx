import Link from "next/link";
import { Header } from "@/components/Header";

export default function BlogPage() {
  return (
    <div>
        <div>
          <Header/>
        </div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link href="/blog/post1" className="text-blue-500 hover:underline">
            How to Learn React Fast
          </Link>
        </li>
        <li>
          <Link href="/blog/post2" className="text-blue-500 hover:underline">
            Tailwind CSS Tips and Tricks
          </Link>
        </li>
      </ul>
    </div>
  );
}
