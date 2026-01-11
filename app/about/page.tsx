import { Header } from "@/components/Header";
export default function About() {
  return (
    <div>
        <div>
          <Header/>
        </div>
       <section className="p-6 bg-gray-100 rounded-lg my-6">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 mb-4">
        Hi, I am Ebad Imran, a passionate Frontend Developer. 
        I love creating clean and interactive web applications using HTML, CSS, JavaScript.
      </p>
      <p className="text-gray-700">
        In my free time, I enjoy:
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
        <li>Learning new web development technologies</li>
        <li>Playing video games</li>
        <li>Watching movies and listening to music</li>
      </ul>
    </section>
    </div>
  );
}
