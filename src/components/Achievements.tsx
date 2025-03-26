import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaAward } from 'react-icons/fa';

const achievements = [
  {
    title: 'National-Level Badminton Player – Maharashtra State Team',
    organization: 'Maharashtra State Badminton Association',
    date: 'January 2023 - December 2023',
    description: 'University Badminton Team Captain – Led a team of 12 athletes at Cal State Fullerton, organizing training sessions, strategizing match plays, and ensuring top performance in inter-university competitions.',
    icon: FaTrophy,
  },
  {
    title: 'Rotary International – Volunteer & Fundraiser',
    organization: 'Rotary International',
    date: 'October 2022',
    description: 'Played a key role in raising $42,000 in donations, which provided food, medical supplies, and emergency housing to over 1,500 flood victims.',
    icon: FaCertificate,
  },
  {
    title: 'MIT-WPU Hackathon Winner',
    organization: 'AI Hackathon 2023',
    date: 'March 2023',
    description: 'Led a team to victory in a 48-hour hackathon, creating a real-time object detection system using TensorFlow and React.',
    icon: FaAward,
  },
];

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
  const Icon = achievement.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="card group"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-500" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
            {achievement.title}
          </h3>
          <p className="text-gray-400 mt-1">{achievement.organization}</p>
          <p className="text-gray-500 mt-1">{achievement.date}</p>
          <p className="mt-4 text-gray-300">{achievement.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Achievements</h2>
          <div className="mt-12 space-y-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.title} achievement={achievement} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 