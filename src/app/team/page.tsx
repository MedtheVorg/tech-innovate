import Container from '@/components/Container';
import Loader from '@/components/Loader';
import TeamMember from '@/components/TeamMember';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import { teamMember1, teamMember2, teamMember3 } from '@/assets';
export const metadata: Metadata = {
    title: 'Team | Tech Innovate',
};

export default async function teamPage() {
    const teamMembers = [
        {
            id: '1',
            name: 'John Smith',
            role: 'Full Stack Developer',
            bio: 'With a passion for creating seamless digital experiences, John brings expertise in full-stack development. His diverse skill set includes front-end technologies like React and Vue.js, coupled with robust back-end proficiency using Node.js and Express.',
            image: teamMember1,
        },
        {
            id: '2',
            name: 'Emily Jones',
            role: 'AI Solutions Specialist',
            bio: "Emily is an AI enthusiast with a focus on creating intelligent solutions. Her expertise lies in developing machine learning models and natural language processing applications. She's committed to pushing the boundaries of AI technology to solve complex problems.",
            image: teamMember2,
        },
        {
            id: '3',
            name: 'Alex Rodriguez',
            role: 'Cybersecurity Analyst',
            bio: 'Alex is dedicated to ensuring the digital security of our clients. With a background in cybersecurity, he specializes in threat detection, security audits, and incident response. Alex is committed to staying ahead of evolving cyber threats.',
            image: teamMember3, // Add the actual image file path
        },
    ];
    return (
        <section className='text-white h-full  min-h-[calc(100vh-64px)]  '>
            <Container className='p-8 '>
                <h1 className='text-5xl tracking-wider font-semibold text-[#00FEFF]'>
                    Our Team
                </h1>
                <Separator className='mt-2 mb-4' />
                <p>Passionate Innovators Driving Tech Excellence</p>
                {/* services */}
                <div className='mt-8 '>
                    {teamMembers.map((member) => (
                        <TeamMember
                            key={member.id}
                            reversed={member.id == '2' && true}
                            {...member}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
