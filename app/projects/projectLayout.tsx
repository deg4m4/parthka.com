import { MDXContent } from "@/components/mdx-components";
import { Tag } from "@/components/tag";

export default function ProjectLayout({
    title,
    description,
    tags,
    mdx,
}: {
    title: string,
    description: string,
    tags: string[],
    mdx: string,
}) {
    return (
        <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="mb-2">{title}</h1>
            {/* <h1 className="mb-2">{post.next}</h1>
        <h1 className="mb-2">{post.previous}</h1> */}
            <div className="flex gap-2 mb-2">
                {tags?.map((tag) => (
                    <Tag tag={tag} key={tag} showOnly />
                ))}
            </div>
            <p className="text-xl mt-0 text-muted-foreground">{description}</p>
            <hr className="my-4" />
            <MDXContent code={mdx} />
        </article>
    )
}