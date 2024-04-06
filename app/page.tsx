import { sortPosts } from "@/lib/utils";
import { posts } from "#site/posts";
import { PostItem } from "@/components/post-item";
import { ProjectItem } from "@/components/project-items";
import getProjectList, { Project } from "@/lib/getproject";

export default function Home() {

  const latestPosts = sortPosts(posts).slice(0, 5);
  const projects = getProjectList({})

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
            Hi, I&apos;m Parthka!
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            A student and backend developer from India 🇮🇳, With curiosity about the inner workings of Computer operating system!
          </p>
        </div>
      </section>

      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-50">
        <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-center">
          My Projects
        </h2>
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
      </section>

      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-50">
        <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>

    </>
  );
}
