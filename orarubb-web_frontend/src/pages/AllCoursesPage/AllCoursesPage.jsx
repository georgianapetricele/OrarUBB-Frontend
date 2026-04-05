import Card from "../../components/Card";
import "../../components/Card.scss";
import Layout from "../../components/layout/Layout";
import { useGetAllCourseInstancesByLanguageQuery } from "../../api/CoursesApi";
import "./AllCoursesPage.scss";

const AllCoursesPage = () => {
  const { data: courses = [] } =
    useGetAllCourseInstancesByLanguageQuery("ro-RO");

  //const mockCourses = getCourses();

  return (
    <Layout>
      <div className="page">
        <div className="all-courses-header">
          <h1>Orar discipline</h1>
        </div>
        <div className="cards-list">
          {courses.map((course) => (
            <Card
              key={course.courseId}
              title={course.courseName}
              subtitle={`Cod: ${course.courseCode}`}
              link={`/course/${course.courseCode}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllCoursesPage;
