import projectList from '@/content/projects.json';

type Project = {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug?: string;
    href?: string;
}

type ProjectList = Project[];

function getProjectList({
    max
}: {
    max?: number;
}): ProjectList {

    if (max && max > 0) {
        return projectList.slice(0, max);
    }

    return projectList;
}

export default getProjectList;
export type { Project, ProjectList };
