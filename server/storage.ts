import { 
  users, type User, type InsertUser, 
  contactMessages, type ContactMessage, type InsertContactMessage 
} from "@shared/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import postgres from "postgres";

// Define the interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMsgs: Map<number, ContactMessage>;
  currentUserId: number;
  currentMsgId: number;

  constructor() {
    this.users = new Map();
    this.contactMsgs = new Map();
    this.currentUserId = 1;
    this.currentMsgId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMsgId++;
    const now = new Date();
    const contactMsg: ContactMessage = { ...message, id, createdAt: now };
    this.contactMsgs.set(id, contactMsg);
    return contactMsg;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMsgs.values());
  }

  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMsgs.get(id);
  }
}

// PostgreSQL database storage implementation
export class PostgresStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;
  
  constructor() {
    const connectionString = process.env.DATABASE_URL || '';
    
    // For local development
    const client = postgres(connectionString);
    this.db = drizzle(client);
  }

  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const result = await this.db.insert(contactMessages).values(message).returning();
    return result[0];
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await this.db.select().from(contactMessages).orderBy(contactMessages.createdAt);
  }

  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    const result = await this.db.select().from(contactMessages).where(eq(contactMessages.id, id));
    return result[0];
  }
}

// Choose which storage implementation to use based on environment
const isDevelopment = process.env.NODE_ENV === 'development';
export const storage: IStorage = process.env.DATABASE_URL 
  ? new PostgresStorage()
  : new MemStorage();
