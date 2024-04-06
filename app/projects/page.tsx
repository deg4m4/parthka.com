import { ProjectItem } from "@/components/project-items";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import getProjectList, { Project } from "@/lib/getproject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects",
  description: "My projects, I get expirience from this projects",
};

export default async function MyProjects() {

  const projects = getProjectList({})

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-10">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-bold text-4xl lg:text-5xl">
            My Projects
          </h1>
        </div>
      </div>

      <div className="">
        <ul className="flex flex-col">
          {projects.map((project: Project) => (
            <li key={project.slug || project.href} className="first:border-t first:border-border">
              <ProjectItem
                slug={project.slug}
                href={project.href}
                title={project.title}
                description={project.description}
                date={project.date}
                tags={project.tags}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
