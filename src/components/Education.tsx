import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Masters of Science in Computer Science',
    school: 'California State University, Fullerton',
    period: 'Jan 2024 - Dec 2025',
    description: [
      'GPA: 3.8',
      'Specialized in Data Structures and Algorithms, Object-Oriented Programming, and Database Management',
      'Vice President of CSUF Badminton Club',
    ],
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'MIT World Peace University, Pune',
    period: '2019 - 2023',
    description: [
      'GPA: 3.9',
      'Focus on Mathematics and Computer Science',
      'Developed strong foundation in programming',
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Education</h2>
          <div className="mt-12 space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card"
              >
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-xl text-gray-400 mt-1">{edu.school}</p>
                  <p className="text-gray-500 mt-2">{edu.period}</p>
                  <ul className="mt-4 space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 