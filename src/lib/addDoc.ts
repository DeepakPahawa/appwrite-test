import { ICourse } from "../types/course.types";
import { ID, db } from "./appwrite.config";
import { courseCollectionId, dbId } from "./constants";

export const addDoc = async (course: ICourse) => {
  console.log("AddDoc =>", course);
  try {
    const result = await db.createDocument(
      dbId,
      courseCollectionId,
      ID.unique(),
      course
    );
    console.log("Result =>", result);
  } catch (error) {
    console.log("Error =>", error);
  }
};
