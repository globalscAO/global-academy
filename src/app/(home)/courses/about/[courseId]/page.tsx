import { use } from "react";

export default function AboutCourse({
  params,
}: {
  params: Promise<{
    courseId: string;
  }>;
}) {
  const { courseId } = use(params);
  return <div className="about-course">{courseId}</div>;
}
