'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import jonas from '@/public/assets/char1.webp';
import lars from '@/public/assets/char6.webp';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { LightRays } from './ui/light-rays';

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  description: string;
  linkedin: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    initials: 'JA',
    name: 'Jonas Alm',
    role: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/jonas-a-40651',
    image: jonas.src,
    description:
      'A veteran gaming entrepreneur with 26 years of experience, founder of Mahjong Logic and co-founder of Qtech Games, serving over 250,000 daily active players.',
  },
  {
    initials: 'LB',
    name: 'Lars Broberg',
    role: 'Product Head',
    linkedin: 'https://www.linkedin.com/in/lbroberg',
    image: lars.src,
    description:
      'A seasoned gaming executive with over 20 years of experience in online Mahjong platforms and game development.',
  },
];

/**
 * Landing page team section component.
 * Displays team member cards with initials, names, roles, and descriptions.
 */
export const LandingTeamSection = ({ withRays = false, withMembers = false, title = 'Meet the Team' }: { withRays?: boolean, withMembers?: boolean, title?: string }) => {
  return (
    <section id='team' className='py-20 px-4 bg-muted/30 relative'>
      {withRays && <LightRays
        color="#4a0000"
        speed={3}
      />
      }
      <div className='container mx-auto max-w-5xl'>
        <ScrollAnimation variant='fadeUp' delay={0.1} className='z-50'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 text-foreground'>
            {title}
          </h2>
        </ScrollAnimation>
        <p className='text-lg text-secondary text-center leading-relaxed mb-16 z-50'>
          The team has over 20 years of experience building and scaling online Mahjong and social gaming platforms, with a proven track record in product development, live operations, monetisation, and international growth. This depth of experience underpins a disciplined execution from launch to scale.
        </p>
        {withMembers && <div className='grid md:grid-cols-2 gap-8'>
          {teamMembers.map((member, index) => (
            <ScrollAnimation
              key={index}
              variant='fadeUp'
              delay={0.2 + index * 0.15}
            >
              <Card className='border-border bg-card'>
                <CardContent className='pt-8'>
                  <div className='flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4 mx-auto'>
                    {/* <span className="text-3xl font-bold text-secondary">{member.initials}</span> */}
                    <Avatar className='shrink-0 h-24 w-16'>
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <a
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                    className='text-2xl font-semibold text-center mb-2 text-card-foreground flex items-center justify-center gap-2'
                  >
                    <h3>{member.name}</h3>
                    <ArrowUpRight className='size-4 text-foreground/50' />
                  </a>
                  <p className='text-center text-secondary font-medium mb-4'>
                    {member.role}
                  </p>
                  <p className='text-muted-foreground leading-relaxed text-center'>
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>}
      </div>
    </section>
  );
};
