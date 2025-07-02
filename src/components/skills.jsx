import React from 'react'
import BlurFade from './magicui/blur-fade'
import { Badge } from './ui/Badge'
import { DATA } from '@/constants/data';
import Sectiontitle from './Sectiontitle';
  import { IconCloud } from "@/components/magicui/icon-cloud";

function Skills() {
  const BLUR_FADE_DELAY = 0.04;

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",

];


  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,);

 
    
  


  return (
     <section id="skills" className='mt-20'>
              <Sectiontitle title="Skills" sub="What I know" />
      
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            {/* <h2 className="text-xl font-bold">Skills</h2> */}
          </BlurFade>
          <div className="flex flex-wrap gap-1 justify-center">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
        </div>
      </section>
  )
}


export default Skills