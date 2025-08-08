
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogData = [
  {
    title: "El Futuro del Desarrollo Web con Next.js 14",
    summary: "Exploramos las características más recientes y cómo están moldeando el futuro de las aplicaciones web.",
    date: "15 de Mayo, 2024",
    author: "Alex Rivera",
    link: "/blog/nextjs-14",
  },
  {
    title: "Principios de Diseño UI/UX para una Conversión Exitosa",
    summary: "Un desglose de las mejores prácticas que aplicamos para crear interfaces que no solo se ven bien, sino que funcionan.",
    date: "28 de Abril, 2024",
    author: "Elena García",
    link: "/blog/ux-design-principles",
  },
  {
    title: "Por Qué Tailwind CSS es Nuestro Framework de Estilos Preferido",
    summary: "Argumentamos por qué la flexibilidad y la velocidad de Tailwind lo convierten en una herramienta indispensable.",
    date: "10 de Abril, 2024",
    author: "Samantha Chen",
    link: "/blog/why-tailwind-css",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Desde Nuestro Blog</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Compartimos nuestro conocimiento y las últimas tendencias de la industria.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 text-white flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl hover:text-teal-400 transition-colors"><Link href={post.link}>{post.title}</Link></CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400">{post.summary}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date} - {post.author}</span>
                <Link href={post.link} className="flex items-center text-teal-400 hover:text-white transition-colors">
                  Leer más <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
