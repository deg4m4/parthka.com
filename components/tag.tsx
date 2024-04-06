import Link from "next/link";
import { slug as Slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
  showOnly?: boolean;
  slug?: string;
}
export function Tag({ tag, current, count, showOnly, slug }: TagProps) {

  if (showOnly) {
    return (
      <span className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "rounded-md",
      })}>
        {tag} {count ? `(${count})` : null}
      </span>
    );
  }

  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md",
      })}
      href={slug || `/tags/${Slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
