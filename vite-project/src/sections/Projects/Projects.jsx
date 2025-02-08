import styles from './ProjectsStyles.module.css';
import cityservices from '../../assets/cityservices.webp';
import GroceryNest from '../../assets/grocery.webp';
import FinanceManagement from '../../assets/finance.jpg';
// import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cityservices}
          link="https://github.com/"
          h3="City Services"
          p="Web App"
        />
        <ProjectCard
          src={GroceryNest}
          link="https://github.com/"
          h3="GroceryNest"
          p="Grocery Shop Website"
        />
        <ProjectCard
          src={FinanceManagement}
          link="https://github.com/"
          h3="Finance Management"
          p="React App"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
