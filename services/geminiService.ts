import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, MENUS, OPERATING_HOURS } from '../constants';

// Initialize the API client
// Note: In a production environment, ensure process.env.API_KEY is defined.
// If the key is missing, the feature will gracefully handle the error.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the Virtual Concierge for THE CHASTAIN, an upscale farm-to-table restaurant in Atlanta.
Your tone is warm, refined, professional, and helpful.
You have the following knowledge base:
- Restaurant Name: ${BUSINESS_INFO.name}
- Address: ${BUSINESS_INFO.address}
- History: ${BUSINESS_INFO.history}
- Sustainability: ${BUSINESS_INFO.sustainability}
- Hours: ${JSON.stringify(OPERATING_HOURS)}
- Menus: ${JSON.stringify(MENUS)}

Instructions:
1. Answer guest questions about the menu, hours, parking (valet complimentary), and dietary restrictions.
2. If asked about reservations, encourage them to click the 'Reservations' button or email ${BUSINESS_INFO.reservationEmail} for parties of 7+.
3. Recommend dishes based on preferences (e.g., "What is good for vegetarians?").
4. Keep answers concise (under 100 words) unless detailed info is requested.
`;

export const sendMessageToConcierge = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I cannot connect to the concierge service at the moment. Please contact the restaurant directly.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    
    return response.text || "I apologize, I couldn't understand that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please ask a staff member or try again later.";
  }
};
