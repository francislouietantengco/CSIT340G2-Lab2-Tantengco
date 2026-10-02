import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Lab Activity 1"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/francislouietantengco/CSIT340-Lab1-Tantengco"
        />
        <ProjectCard
          year="2026"
          title="Lab Activity 3"
          description="My portfolio page, rebuilt in React as a set of reusable components."
          tech="React · Tailwind CSS"
          link="https://github.com/francislouietantengco/CSIT340G6-Lab3-Tantengco"
        />
        <ProjectCard
          year="2026"
          title="Lab Activity Introduction"
          description="The introductory activity for my CSIT340 class."
          tech="Git · GitHub"
          link="https://github.com/francislouietantengco/csit340g6"
        />
        <ProjectCard
          year="2026"
          title="Git Crew Sync"
          description="A class assignment on syncing and collaborating with Git."
          tech="Git · GitHub"
          link="https://github.com/francislouietantengco/git-crew-sync-tantengco-francis"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
