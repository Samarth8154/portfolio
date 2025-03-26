import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiGit,
  SiPython,
  SiJava,
  SiCplusplus,
  SiCsharp,
  SiMongodb,
  SiPowerbi,
  SiDocker,
  SiMicrosoftexcel,
  SiSpringboot,
  SiAmazonaws
} from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'TailwindCSS', level: 95 },
    { name: 'Next.js', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'SQL', level: 85 },
  ],
  ai: [
    { name: 'Machine Learning', level: 85 },
    { name: 'Deep Learning', level: 80 },
    { name: 'TensorFlow', level: 75 },
    { name: 'PyTorch', level: 75 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 80 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-blue-500 h-2 rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Skills</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card"
              >
                <h3 className="text-xl font-bold text-white mb-6 capitalize">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 