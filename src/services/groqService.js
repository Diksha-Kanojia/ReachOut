import axios from 'axios';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const groqService = {
  async sendMessage(message) {
    try {
      const response = await axios.post(GROQ_API_URL, {
        messages: [
          {
            role: "system",
            content: "You are a compassionate AI assistant for a suicide prevention website. Provide supportive, empathetic responses while encouraging professional help when appropriate. Always be gentle and understanding. Keep responses concise but meaningful."
          },
          {
            role: "user",
            content: message
          }
        ],
        model: "llama3-8b-8192", // Current supported models: llama3-8b-8192, llama3-70b-8192, gemma-7b-it
        temperature: 0.7,
        max_tokens: 500,
        top_p: 1,
        stream: false
      }, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Full Error Object:', error);
      console.error('Error Response:', error.response);
      console.error('Error Message:', error.message);
      
      // Check if API key is missing
      if (!import.meta.env.VITE_GROQ_API_KEY) {
        console.error('VITE_GROQ_API_KEY is not defined');
        throw new Error('API key is missing. Please check your environment variables.');
      }
      
      // Check if it's an API key issue
      if (error.response?.status === 401) {
        console.error('401 Unauthorized - Invalid API key');
        throw new Error('Invalid API key. Please check your Groq API key.');
      }
      
      // Check if it's a rate limit issue
      if (error.response?.status === 429) {
        console.error('429 Rate Limited');
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      }
      
      // Check for network errors
      if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
        console.error('Network error');
        throw new Error('Network connection failed. Please check your internet connection.');
      }
      
      // Log the specific error for debugging
      console.error('API Error Status:', error.response?.status);
      console.error('API Error Data:', error.response?.data);
      
      // Generic error
      throw new Error(`API Error: ${error.response?.data?.error?.message || error.message || 'Unknown error'}`);
    }
  }
};

export default groqService;