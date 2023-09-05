import { OPENAIAPI } from '$/service/envValues';
import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import { OpenAI } from 'langchain/llms/openai';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';

export const langchainUseCase = async (message: string) => {
  console.log('langchainUseCase');
  try {
    const llm = new OpenAI({
      openAIApiKey: OPENAIAPI,
      temperature: 0.9,
      modelName: 'gpt-4',
    });

    const tools = [new SerpAPI(), new Calculator()];

    const executor = await initializeAgentExecutorWithOptions(tools, llm, {
      agentType: 'chat-conversational-react-description',
      verbose: true,
    });

    console.log('langchainUseCase');

    const result = await executor.run(message);
    return result;
  } catch (error) {
    console.log(error);
    console.log('error');
  }
};
