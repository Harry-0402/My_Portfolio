import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { saveContactToSheet } from "./google-sheets";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate request body against schema
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Save to database
      const savedMessage = await storage.createContactMessage(contactData);
      
      return res.status(200).json({ 
        message: 'Message received successfully', 
        success: true,
        data: savedMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: 'Validation error', 
          errors: error.errors,
          success: false 
        });
      }
      
      console.error('Error saving contact message:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your message', 
        success: false 
      });
    }
  });

  // Get all contact messages (admin-only endpoint in a real app)
  app.get('/api/contact', async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json({ success: true, data: messages });
    } catch (error) {
      console.error('Error retrieving contact messages:', error);
      return res.status(500).json({ 
        message: 'An error occurred while retrieving messages', 
        success: false 
      });
    }
  });

  // Get a specific contact message by ID
  app.get('/api/contact/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          message: 'Invalid ID format', 
          success: false 
        });
      }
      
      const message = await storage.getContactMessage(id);
      if (!message) {
        return res.status(404).json({ 
          message: 'Message not found', 
          success: false 
        });
      }
      
      return res.status(200).json({ success: true, data: message });
    } catch (error) {
      console.error('Error retrieving contact message:', error);
      return res.status(500).json({ 
        message: 'An error occurred while retrieving the message', 
        success: false 
      });
    }
  });

  // New API endpoint for contact form with Google Sheets
  app.post('/api/contact-sheet', async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          message: 'All fields are required',
          success: false
        });
      }

      await saveContactToSheet({ name, email, subject, message });
      
      return res.status(200).json({
        message: 'Message sent successfully',
        success: true
      });
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      return res.status(500).json({
        message: 'Failed to send message. Please try again.',
        success: false
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
