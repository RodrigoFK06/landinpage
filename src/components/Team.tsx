
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamData = [
  {
    name: "Alex Rivera",
    role: "Fundador & CEO",
    bio: "Visionario y estratega, enfocado en llevar las ideas más audaces a la realidad digital.",
    avatar: "/avatar-placeholder.svg",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Samantha Chen",
    role: "Lead Frontend Developer",
    bio: "Apasionada por crear interfaces de usuario intuitivas, interactivas y hermosas.",
    avatar: "/avatar-placeholder.svg",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Kim",
    role: "Backend Architect",
    bio: "El cerebro detrás de nuestras soluciones robustas y escalables. Amante del código limpio.",
    avatar: "/avatar-placeholder.svg",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
   {
    name: "Elena García",
    role: "Diseñadora UI/UX",
    bio: "Combina arte y usabilidad para diseñar experiencias que los usuarios aman.",
    avatar: "/avatar-placeholder.svg",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 sm:py-32 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Conoce a Nuestro Equipo</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Las mentes creativas y técnicas detrás de Bytecore.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <Card key={index} className="bg-black border-gray-800 text-center flex flex-col items-center pt-8 hover:bg-gray-800/50 transition-colors duration-300">
              <CardHeader className="items-center">
                <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
                <CardTitle className="text-white">{member.name}</CardTitle>
                <p className="text-teal-400">{member.role}</p>
              </CardHeader>
              <CardContent className="text-gray-400 text-sm">
                <p>{member.bio}</p>
                 <div className="flex justify-center mt-4 space-x-4">
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Linkedin size={20}/></a>
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white"><Twitter size={20}/></a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
