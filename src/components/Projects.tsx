import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Image Recognition App',
    description: 'Developed a mobile-based AI Image Recognition application that leverages convolutional neural networks (CNNs) to detect and classify objects in real-time images. The app allows users to upload images, performs inference using a pre-trained deep learning model (e.g., ResNet, MobileNet), and returns predictions with confidence scores. Integrated a clean, user-friendly interface for seamless interaction and result visualization.',
    technologies: ['Python', 'TensorFlow', 'React Native'],
    image: '/images/projects/project1.jpeg',
    link: 'https://github.com/yourusername/project1'
  },
  {
    title: 'E-commerce Platform – Tech Up My World',
    description: 'Built a full-stack e-commerce platform focused on selling mobile phones and electronic accessories. Implemented product listing, secure user authentication, shopping cart, payment gateway integration (Stripe/PayPal), and order tracking features. Designed a responsive front-end and scalable backend with inventory management and admin dashboards.',
    technologies: ['React.js', 'node.js', 'MongoDB','Stripe API'],
    image: '/images/projects/project2.jpeg',
    link: 'https://github.com/yourusername/project2'
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Designed and developed an interactive data analytics dashboard to visualize business KPIs and performance metrics across multiple departments. Pulled and cleaned data from various sources (CSV, SQL databases, APIs), and used interactive charts and filters for real-time insights. Deployed the dashboard for decision-makers to track trends, outliers, and key metrics.',
    technologies: ['Python(Pandas)', 'SQL', 'PowerBI'],
    image: '/images/projects/project3.jpeg',
    link: 'https://github.com/yourusername/project3'
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="card group"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Projects</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 