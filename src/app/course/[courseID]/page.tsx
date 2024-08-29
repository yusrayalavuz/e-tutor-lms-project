import React from "react";
import StudentFeedback from "@/Components/SingleCourseFeedback/SingleCourseFeedback";
import { RelatedCourses } from "@/Components/RelatedCourses/RelatedCourses";

const CoursePage = ({ params }: { params: { courseID: string } }) => {
  return (
    <>
      <div>Single Course Page {params.courseID}</div>
      <div>
        <StudentFeedback />
      </div>
      <div>
        <RelatedCourses />
      </div>
    </>
  );
};

export default CoursePage;
