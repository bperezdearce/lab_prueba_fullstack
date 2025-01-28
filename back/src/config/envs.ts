import "dotenv/config";

export const PORT = process.env.PORT || 2000;

export const DATABASE_URL = process.env.DATABASE_URL || undefined;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || "5432";
export const DB_USER = process.env.DB_USER || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
export const DB_NAME = process.env.DB_NAME || "postgres";
