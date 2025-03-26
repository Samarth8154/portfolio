import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">About Me</h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
            A highly Spearheaded and motivated software engineer with a keen eye for detail, disciplined approach to coding and 
debugging, and proven capabilities in Software Development, Data Science and Machine Learning. Seeking to leverage 
former experience and unrivaled enthusiasm to build exceptional software and take on innovative projects for a company 
that values excellence and forward-thinking. 
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              With expertise in full-stack development and data science, I specialize in building scalable applications 
              and implementing machine learning models. I'm particularly interested in the intersection of software engineering 
              and artificial intelligence, where I can leverage both skills to create impactful solutions.
            </p>
          </div>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Full-Stack Development",
              description: "Building scalable web applications with modern technologies and best practices."
            },
            {
              title: "Machine Learning",
              description: "Developing and deploying ML models to solve complex business problems."
            },
            {
              title: "Data Engineering",
              description: "Designing efficient data pipelines and ETL processes for data-driven solutions."
            }
          ].map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="card group"
            >
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-gray-400">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 