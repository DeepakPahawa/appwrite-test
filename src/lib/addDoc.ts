import { config } from "../config/config";
import { ICourse } from "../types/course.types";
import { ID, db } from "./appwrite.config";

export const addDoc = async (course: ICourse) => {
  console.log("AddDoc =>", course);
  try {
    const result = await db.createDocument(
      config.appwriteDatabaseId,
      config.appwriteCourseCollectionId,
      ID.unique(),
      course
    );
    console.log("Result =>", result);
  } catch (error) {
    console.log("Error =>", error);
  }
};
