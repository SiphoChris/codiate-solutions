import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { portfolioProjects, project } from '@/_constants/portfolio';
import Image from 'next/image';



export default function Portfolio({
  projects = portfolioProjects,
  backgroundColor = 'bg-indigo-950',
  title = 'Some of the projects we have worked on',
  headline = 'Portfolio',
}: {
  title?: string;
  headline?: string;
  backgroundColor?: string;
  projects?: project[];
}) {
  return (
    <section className={cn(`${backgroundColor} w-full py-16 text-white mt-32`)}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-rose-500 text-xl font-semibold">{headline}</p>
          <h2 className="mb-6 text-3xl font-light">
            <span className="italic">{title}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 z-10 opacity-20 transition-opacity group-hover:opacity-0"></div>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.name}
                  className="object-cover"
                />
              </div>
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-indigo-900 to-transparent p-6">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="mb-3 text-indigo-300">{project.role}</p>
                <div className="flex space-x-3">
                  {project.socialMedia?.facebook && (
                    <Link
                      prefetch={false}
                      href={project.socialMedia.facebook}
                      className="text-white hover:text-indigo-300"
                    >
                      <Facebook size={18} />
                    </Link>
                  )}
                  {project.socialMedia?.twitter && (
                    <Link
                      prefetch={false}
                      href={project.socialMedia.twitter}
                      className="text-white hover:text-indigo-300"
                    >
                      <Twitter size={18} />
                    </Link>
                  )}
                  {project.socialMedia?.linkedin && (
                    <Link
                      prefetch={false}
                      href={project.socialMedia.linkedin}
                      className="text-white hover:text-indigo-300"
                    >
                      <Linkedin size={18} />
                    </Link>
                  )}
                </div>
              </div>
              {project.recentProject && (
                <div className="bg-opacity-80 absolute top-0 right-0 left-0 primary-gradient p-6">
                  <p className="text-sm font-medium">Most Recent</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
