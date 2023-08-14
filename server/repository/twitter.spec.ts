import { chromium } from '@playwright/test';
import axios from 'axios';

export const twitterOpenAIAction = async (AAA: string) => {
  const TODO_NAME = AAA;
  const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
  const apiKey = process.env.OPENAI_API_KEY;
  const inputData = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Ready to brighten your day with some witty responses!' },
      { role: 'user', content: `${TODO_NAME}専門家のツイート内容を1つ作成して、教えてください` },
    ],
  };

  const response = await axios.post(apiEndpoint, inputData, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  });

  const message = response.data.choices[0]?.message;
  // console.log(message.content);
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://twitter.com/login');
  await page.getByLabel('Phone, email, or username').click();
  await page.getByLabel('Phone, email, or username').fill('ini5thji');
  await page.getByLabel('Phone, email, or username').press('Enter');
  await page.getByLabel('Password', { exact: true }).fill('iniad5thjissyuu');
  await page.getByLabel('Password', { exact: true }).press('Enter');
  await page.getByTestId('SideNav_NewTweet_Button').click();
  await page.getByRole('textbox', { name: 'Tweet text' }).click();
  await page.getByRole('textbox', { name: 'Tweet text' }).fill(message.content);
  await page.getByTestId('tweetButton').click();
};
