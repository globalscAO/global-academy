import { Suspense } from "react";
import Courses from "./container/Courses";

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="primary-label animate-pulse">Carregando...</div>
      }>
      <Courses />
    </Suspense>
  );
}
