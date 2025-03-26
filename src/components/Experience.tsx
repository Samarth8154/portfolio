import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Java Development Intern ',
    company: 'Omnisys IT Solutions Pvt Ltd, Pune',
    period: 'May 2021 - December 2021',
    description: [
      'Played a key role in developing and testing over 5 Java applications, driving improvements in functionality',
       'Managed the successful integration of four new functionalities into existing applications',
      'Successfully completed 3 challenging projects, including a payroll system and a content management system',
      'Leveraged problem-solving skills to resolve 25+ critical issues, improving development efficiency by 20%, ', 
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'Tarento Technologies, Bangalore',
    period: 'July 2022 - March 2023',
    description: [
      'Created a Python-based Machine Learning algorithm that reduced customer churn by 15% for an e-commerce platform',
      'Applied Random Forest and Logistic Regression algorithms, achieving 95% accuracy in predictive models. ',
      'Deployed machine learning models on AWS cloud, enhancing real-time data processing by 40% ',
      'Devised Adaptive Power BI reports that improved data visualization and insights, reducing report generation time',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Experience</h2>
          <div className="mt-12 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card"
              >
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-xl text-gray-400 mt-1">{exp.company}</p>
                  <p className="text-gray-500 mt-2">{exp.period}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
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

export default Experience; 