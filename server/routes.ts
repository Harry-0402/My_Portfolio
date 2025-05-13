import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // In a real app, you might save this to the database or send an email
    // For now, just return success
    return res.status(200).json({ 
      message: 'Message received successfully', 
      success: true
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
