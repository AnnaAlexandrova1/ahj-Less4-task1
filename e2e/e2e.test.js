import puppetteer from 'puppeteer';

const childProcess = require('child_process');

jest.setTimeout(30000);
describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;

  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    server = await childProcess.fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', () => {
        reject();
      });
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
      headless: true,
      slowMo: 100,
      devtools: false,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  describe('Форма валидации номеров платежных карт', () => {
    test('Открытие основной страницы', async () => {
      await page.goto(baseUrl);
    });

    test('Должен добавить класс valid если номер валидный', async () => {
      await page.goto(baseUrl);
      const form = await page.$('.inputForm');
      const input = await form.$('#card-number');
      await input.type('4539499701100246');
      const submit = await form.$('.button');
      submit.click();
      await page.waitForSelector('.mess.valid');
    });

    test('Должен добавить класс invalid если номер не валидный', async () => {
      await page.goto(baseUrl);
      const form = await page.$('.inputForm');
      const input = await form.$('#card-number');
      await input.type('4539499701100247');
      const submit = await form.$('.button');
      submit.click();
      await page.waitForSelector('.mess.invalid');
    });
  });
});
