import React from 'react'
import Sectiontitle from './Sectiontitle'
import { ProjectCard } from './Project-card'
import BlurFade from './magicui/blur-fade'
import { DATA } from '@/constants/data'

function Portfolio() {
  return (
    <section className='relative flex flex-col items-center gap-y-9 bg-black mt-20'>
        <Sectiontitle title="PROJECTS" sub="A Glimpse of What I have Created " />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
                      <BlurFade key={project} delay={0.25 + id * 0.05} inView>

                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
    </section>
  )
}

export default Portfolio