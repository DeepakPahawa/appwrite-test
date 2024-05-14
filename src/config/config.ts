export const config = {
  appwriteEndPoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCourseCollectionId: String(
    import.meta.env.VITE_APPWRITE_COURSE_COLLECTION_ID
  ),
};
