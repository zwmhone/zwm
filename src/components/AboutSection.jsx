import { Briefcase, Code, User } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  // Education items live right here
  const expCards = [
    {
      title: "Pearson BTEC Level 5 HND in Computing",
      year: "2024 - 2025",
      place: "MMSIT",
    },
    {
      title: "Pearson BTEC Level 3 National Diploma in IT",
      year: "2023 - 2024",
      place: "MMSIT",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: intro */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground text-justify">
              Hi! I’m an 18 year-old Developer with a strong focus on frontend
              development. I’m passionate about creating clean, responsive, and
              user-friendly web interfaces that bring ideas to life. Currently
              pursuing my BTEC Level 5 Diploma, I’m honing my skills in HTML,
              CSS, JavaScript, and popular frontend frameworks to build seamless
              digital experiences.
            </p>
            <p className="text-muted-foreground text-justify">
              While I am exploring the full stack, my strength lies in designing
              intuitive layouts and smooth interactions that make apps enjoyable
              to use.
            </p>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Education
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {expCards.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border shadow-sm card-hover text-left"
                >
                  <h4 className="font-semibold">{edu.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {edu.year} • {edu.place}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-1 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 pt-1">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Developement</h4>
                  <p className="text-muted-foreground">
                    I’m passionate about bringing ideas to life through clean
                    and efficient code, focusing on building websites that users
                    enjoy.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    I focus on designing intuitive and engaging interfaces,
                    ensuring a smooth and enjoyable user experience through
                    thoughtful layout and interaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    I’m gaining experience in organizing tasks and managing time
                    effectively to help projects move forward smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
