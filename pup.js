
const puppeteer = require('puppeteer');
const { time } = require('console');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://tagmanager.google.com';
  await page.goto(url);
  await page.screenshot({path: 'testing.png'});
  await page.type('input', 'jason@brandlync.com');
  await page.screenshot({path: 'example.png'});
  //   const getBtn = await page.evaluate(() => Array.from(
  //     document.querySelectorAll('#next')).map(all => all.innerHTML));
  // console.log(getBtn)
    await Promise.all([
    page.waitForNavigation(),
    page.click('#next'),
    console.log('clicked')
])

  await page.screenshot({path: 'afterbtn.png'});
  await page.type('input', 'placeholder');
  await page.screenshot({path: 'afterPassWord.png'});
  await Promise.all([
    page.waitForNavigation(),
    page.click('#submit'),
    console.log('clicked')
])
await page.screenshot({path: 'LogedIn.png'});

console.log('before waiting');
await page.evaluate(async() => {
  setTimeout(function(){
      console.log('waiting');
  }, 100000)
});
console.log('after waiting');

await Promise.all([
  page.waitForNavigation(),
  page.click('.empty-placeholder'),
  console.log('clicked')
])
await page.screenshot({path: 'createBtnClicked.png'});

  await browser.close();
})();

