"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Github,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  Building,
} from "lucide-react";
import ChatBot from "./components/chat-bot";

export default function Portfolio() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const skills = [
    "JavaScript",
    "c++",
    "php",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "MongoDB Compass",
    "npm",
    "Chrome DevTools",
    "RESTful APIs",
    "Cloud-based Systems",
    "PHP",
    "PostgreSQL",
    "Bootstrap",
  ];

  const languages = [
    { name: "English", level: "Non-native" },
    { name: "Amharic", level: "Fluent" },
    { name: "Somali", level: "Fluent" },
    { name: "Oromo", level: "Fluent" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">
              Abdisa Abdurahim
            </h1>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/4bdisa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
             <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/4bdisa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="bg-white shadow-lg rounded-sm p-6 max-w-md mx-auto">
            <img
              src="/profile.JPG"
              alt="AA"
              className="w-60 h-60 rounded-full mx-auto mb-4 border-4 border-slate-200"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              Abdisa Abdurahim 
            </h1>
            <p className="text-xl text-slate-600 mb-4">Full Stack Developer | National ID IT Technical Support Advisor atEthio Telecom | Problem Solver & Systems Support Specialist</p>
            <div className="flex justify-center items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Addis Ababa</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(+251) 976 165 168</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>4bdisa@gmail.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                Dedicated and adaptable Computer Science graduate with a background in both technical support and web development. As a junior full-stack developer, I have practical experience building applications like "FixerHub" using the MERN stack to connect users with local service providers. Currently serving as an IT Technical Support Advisor at Ethio Telecom, I possess strong problem-solving skills and a commitment to writing clean, maintainable code. I am a rapid learner focused on delivering functional, real-world utility through modern web technologies.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Technical Skills */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Technologies & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Development Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Fullstack Web Development</Badge>
                    <Badge variant="outline">RESTful APIs</Badge>
                    <Badge variant="outline">Cloud-based Systems</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Languages */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="text-center">
                    <div className="font-semibold text-slate-800">
                      {lang.name}
                    </div>
                    <div className="text-sm text-slate-600">{lang.level}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Work Experience */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-green-500 pl-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Technical Support Advisor (National ID Project)
                    </h3>
                    <p className="text-slate-600 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Ethio Telecom – Ethiopia
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                   March 2026 – Present
                  </div>
                </div>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>
                   Technical Operations Lead: Provide high-level technical oversight for the National ID registration system, ensuring 99.9% uptime for critical biometric enrollment software.
                  </li>
                  <li>
                   Performance Optimization: The ability to identify "bottlenecks" in a software workflow and refactor the process to make it faster.
                  </li>
                  <li>
                    Gained strong communication, problem-solving, Technical Mentorship, Cross-functional Collaboration, Operational Leadership.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-blue-500 pl-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Full Stack Developer Intern
                    </h3>
                    <p className="text-slate-600 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      West Arsi Human Resource Management Bureau – Shashamane,
                      Ethiopia
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    June 2024 – August 2024
                  </div>
                </div>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>
                    Developed a cloud-based file management system using HTML,
                    CSS, JavaScript (Bootstrap), PHP, and PostgreSQL
                  </li>
                  <li>
                    Replaced paper-based processes with a digital solution to
                    reduce data loss and improve access
                  </li>
                  <li>
                    Contributed to 80% of system development in a waterfall
                    environment, setting the stage for future deployment
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-green-500 pl-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Student Union Executive – Finance & Treasurer / Temporary
                      Vice President
                    </h3>
                    <p className="text-slate-600 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Haramaya University – Ethiopia
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    2023 – 2024
                  </div>
                </div>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>
                    Managed union financial operations and collaborated with
                    university staff to support student initiatives
                  </li>
                  <li>
                    Led meetings and supported team coordination as temporary VP
                    for five months
                  </li>
                  <li>
                    Gained strong communication, problem-solving, and leadership
                    skills
                  </li>
                </ul>
              </div>
            
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Featured Project</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-6 bg-slate-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      FixerHub – General Maintenance Platform
                    </h3>
                    <p className="text-slate-600 mb-2">
                      Fullstack Web Application (MERN Stack)
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://fixerhub.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      view the project 
                    </a>
                  </Button>
                </div>
                <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                  <li>
                    A platform that connects customers with nearby service
                    providers based on location and average rating
                  </li>
                  <li>
                    Allows customers to send service requests, which providers
                    can accept or decline
                  </li>
                  <li>
                    Features include service provider sorting, user
                    authentication, and service tracking
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Authentication</Badge>
                  <Badge>Location Services</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-l-2 border-purple-500 pl-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      BSc in Computer Science
                    </h3>
                    <p className="text-slate-600">
                      Haramaya University – Haramaya, Ethiopia
                    </p>
                    <p className="text-sm text-slate-500">
                      Specialization: Fullstack Web Development and Software
                      Engineering Fundamentals
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    2021 – 2025
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Chat Bot */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-96 z-50">
          <ChatBot onClose={() => setIsChatOpen(false)} />
        </div>
      )}

      {/* Chat Bot Toggle */}
      {!isChatOpen && (
        <Button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg z-40"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">
            Let's connect and build something amazing together!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="text-white border-white hover:bg-white hover:text-slate-800 bg-transparent"
            >
              <a
                href="https://github.com/4bdisa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="text-white border-white hover:bg-white hover:text-slate-800 bg-transparent"
            >
              <a href="mailto:4bdisa@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="text-white border-white hover:bg-white hover:text-slate-800 bg-transparent"
            >
              <a href="https://www.linkedin.com/in/4bdisa" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            © 2024 Abdisa Abdurahim. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
