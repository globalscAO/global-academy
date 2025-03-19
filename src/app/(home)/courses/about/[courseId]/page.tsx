export default function AboutCourse({
  params,
}: {
  params: {
    courseId: string;
  };
}) {
  return <div className="about-course">{params.courseId}</div>;
}
