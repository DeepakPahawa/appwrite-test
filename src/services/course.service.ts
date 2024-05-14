import { addDoc } from "../lib/addDoc";
import { ICourse } from "../types/course.types";

class CourseService {
  public createCourse(course: ICourse) {
    const result = addDoc(course);
    console.log(result);
  }
}

export const courseService = new CourseService();
