import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, techIcons } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {techIcons.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* <img className={styles.imgCenter} src={technology.icon} alt={technology.name} /> */}
            <technology.icon size='100px' className={styles.imgCenter}/>
            <p className={styles.sectionSubTextCenter}>{technology.name}</p>
            {/* <BallCanvas icon={technology.icon} /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
