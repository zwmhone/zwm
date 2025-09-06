import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github, Tags } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DoBu Martial Arts Gym",
    Description:
      "A frontend-focused website built with HTML and CSS, featuring an integrated email-sending API for easy contact and communication.",
    image: "/projects/project1.png",
    Tags: ["Html", "CSS", "Javascript", "API", "Frontend"],
    demoUrl: "https://dobu-martial-arts-gym.vercel.app/landingPage",
    githubUrl: "https://github.com/zwmhone/Dobu",
  },
  {
    id: 2,
    title: "Jumpstart",
    Description:
      "An e-commerce frontend enhanced with an AI chatbot using OpenRouter API with Spring Boot For seamless user interaction.",
    image: "/projects/project2.png",
    Tags: [
      "Html",
      "CSS",
      "javascript",
      "SpringBoot",
      "Java",
      "API",
      "frontend",
    ],
    demoUrl: " ",
    githubUrl: "https://github.com/zwmhone/Jumpstart",
  },
  {
    id: 3,
    title: "ThinkPad",
    Description:
      "A minimalistic note-taking web application built with the MERN stack for efficient and intuitive note management.",
    image: "/projects/project3.png",
    Tags: ["MongoDB", "Express", "React", "Node.js", "Full Stack"],
    demoUrl: "https://dobu-martial-arts-gym.vercel.app/landingPage",
    githubUrl: "https://github.com/zwmhone/thinkpad",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.Tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border border-gray-200/60 dark:border-gray-700/60 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">
                  {[project.Description]}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/zwmhone"
          >
            Check Out More On My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
