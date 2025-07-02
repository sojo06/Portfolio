import React from 'react'
import BlurFade from './magicui/blur-fade';
import { ResumeCard } from './magicui/Resume-card';
import { DATA } from '@/constants/data';
import Sectiontitle from './Sectiontitle';

function Education() {
    const BLUR_FADE_DELAY = 0.04;

  return (
     <section id="education">
              <Sectiontitle title="Education" sub="My academic qualifications" />
      
        <div className="flex min-h-0 flex-col gap-y-3 ">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
  )
}

export default Education