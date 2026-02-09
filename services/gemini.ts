
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateContentInsights = async (niche: string, platform: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze current trends and content ideas for a ${niche} creator on ${platform}. Provide a structured list of 3-4 distinct insights.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            type: { type: Type.STRING, description: 'One of: TREND, IDEA, GROWTH' },
            score: { type: Type.NUMBER, description: 'A numeric relevance score 1-100' }
          },
          required: ["title", "description", "type", "score"]
        }
      }
    }
  });

  try {
    return JSON.parse(response.text || '[]');
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return [];
  }
};

export const generateCaption = async (topic: string, tone: string = 'energetic') => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a viral social media caption, title, and 5 hashtags for the topic: "${topic}". Tone should be ${tone}.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          caption: { type: Type.STRING },
          hashtags: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: ["title", "caption", "hashtags"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return null;
  }
};

export const getMatchmakingReason = async (userProfile: any, freelancerProfile: any) => {
  const ai = getAIClient();
  const prompt = `Why would ${userProfile.name} (a ${userProfile.niche} creator) match well with ${freelancerProfile.name} (a freelancer with skills: ${freelancerProfile.skills.join(', ')})? Give a short, 2-sentence explanation of the synergy.`;
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt
  });

  return response.text || "This match is recommended based on niche alignment and required expertise.";
};
