import { Component } from '@angular/core';
import { GoogleGenAI } from "@google/genai";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  description: string = '';
  aiResponse: string = ''; 
  ai = new GoogleGenAI({
    apiKey: 'AIzaSyAhGhAC4C90ks6A4vgFSxI-7kMGt2U29ng',
    // works?
  });

  async geminirecs() {
    if (!this.description.trim()) {
      console.warn('Please enter a mood!');
      return;
    }

    try {
      let response: any = await this.ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: [
          {
            text: "You are a helpful AI that gives movie recommendations based on the mood that the user has described. You respond with a string of maximum 10 movies and minimum 2 movies that match that mood. You respond with a string of movies separated by commas with no extra text or context. Just the titles."
          },
          {
            text: this.description
          }
        ],
      });

      this.aiResponse = response.text; 
    } catch (error) {
      console.error('Error generating content:', error);
    }
  }
}
