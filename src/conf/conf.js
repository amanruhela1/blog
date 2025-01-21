const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    
}

console.log("Appwrite URL:", import.meta.env.VITE_APP_APPWRITE_URL);
console.log("Appwrite Project ID:", import.meta.env.VITE_APP_PROJECT_ID);
console.log("Appwrite Database ID:", import.meta.env.VITE_APP_DATABASE_ID);
console.log("Appwrite Collection ID:", import.meta.env.VITE_APP_COLLECTION_ID);
console.log("Appwrite Bucket ID:", import.meta.env.VITE_APP_BUCKET_ID);

export default conf