import type { Browser, BrowserContext, Page } from '@playwright/test';
import { chromium } from '@playwright/test';
import { describe, it } from 'node:test';
import { afterAll, beforeAll, expect } from 'vitest';
import { twitterOpenAIAction } from '../repository/twitter.spec';

describe('Twitter Integration', () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should post a tweet using generated content', async () => {
    // Replace 'your-api-key' with the actual OpenAI API key
    const apiKey = 'your-api-key';
    process.env.OPENAI_API_KEY = apiKey;

    // Generate content using OpenAI
    const generatedContent = await twitterOpenAIAction('TODO_NAME');

    await page.goto('https://twitter.com/login');
    // ログインステップなどのテストコード

    // Replace this with the actual steps to post a tweet
    // For example, you can use playwright functions like `page.fill()`, `page.click()`, etc.
    await page.goto('https://twitter.com'); // 例示のため、適切なページに移動
    await page.fill('[data-testid="tweetTextarea_0"]', generatedContent);

    // Click the tweet button
    await page.click('[data-testid="tweetButtonInline"]');

    // Wait for tweet to be posted
    await page.waitForSelector('[data-testid="tweet"]');

    // You can add assertions to check if the tweet was posted successfully
    const tweetText = await page.textContent('[data-testid="tweet"] .tweet-text');
    expect(tweetText).toContain(generatedContent);
  });
});
