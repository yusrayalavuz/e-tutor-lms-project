import { CourseCard } from "../CourseCard/CourseCard";
import { CoursesData } from "../../utils/CoursesData";

import styles from "./BestSellingCourses.module.scss";

export const BestSellingCourses: React.FC = () => {
  return (
    <section className={styles.bestSellingCourses}>
      <h1 className={styles.sectionTitle}>Best Selling Courses</h1>
      <div className={styles.courseCardsWrapper}>
        {CoursesData.slice(0, 10).map((card) => {
          return (
            <CourseCard
              id={card.id}
              title={card.title}
              category={card.category}
              categoryColor={card.categoryColor}
              categoryBgColor={card.categoryBgColor}
              price={card.price}
              thumbnail={card.thumbnail}
              review={card.review}
              registeredStudents={card.registeredStudents}
              courseOwner={card.courseOwner}
              description={card.description}
              duration={card.duration}
              level={card.level}
            />
          );
        })}
      </div>
    </section>
  );
};
