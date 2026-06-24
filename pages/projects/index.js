import { projects } from "@/constants";
import { ProjectCard } from "@/components/Works";

export default function ProjectsPage() {
    return (
        <section className="container mx-auto px-8 py-20">
            <h1 className="text-4xl font-bold mb-4">
                All Projects
            </h1>

            <p className="mb-12">
                Collection of personal, freelance, learning, and experimental projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    index={index}
                    {...project}
                />
                ))}
            </div>
        </section>
    );
}