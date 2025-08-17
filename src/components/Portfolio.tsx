
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioData = [
  {
    title: "Proyecto Alpha",
    description: "Una plataforma de e-commerce de alto rendimiento con integraciones de pago y un panel de administración a medida.",
    stack: ["Next.js", "Tailwind CSS", "Firebase", "Stripe"],
    image: "/placeholder-600x400.svg", // Placeholder image
  },
  {
    title: "Cliente Beta",
    description: "Aplicación web para la gestión de reservas y citas, mejorando la eficiencia operativa en un 40%.",
    stack: ["React", "Node.js", "MongoDB", "GraphQL"],
    image: "/placeholder-600x400.svg",
  },
  {
    title: "Iniciativa Gamma",
    description: "Un SaaS para análisis de datos en tiempo real, procesando millones de eventos por segundo.",
    stack: ["Vue.js", "Python (Django)", "PostgreSQL", "AWS"],
    image: "/placeholder-600x400.svg",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nuestro Trabajo</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Estamos orgullosos de los proyectos que hemos entregado.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 text-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <CardHeader>
                <img src={project.image} alt={project.title} className="rounded-t-lg" />
                <CardTitle className="mt-4">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-teal-400/10 text-teal-300">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
