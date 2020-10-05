const puppeteer = require('puppeteer');
const { time } = require('console');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--window-size=2560,1440',
    ],
  });
  const page = await browser.newPage();
  const url = 'https://www.abchyundai.com';
  await page.goto(url);
  await page.screenshot({path: 'newlanding.png'});
//   await page.type('input', 'jason@brandlync.com');
//   await page.screenshot({path: 'example.png'});
  //   const getBtn = await page.evaluate(() => Array.from(
  //     document.querySelectorAll('#next')).map(all => all.innerHTML));
  // console.log(getBtn)
    await Promise.all([
    page.waitForNavigation(),
    page.click('div'),
    console.log('clicked')
])

  await page.screenshot({path: 'afterbtn.png'});
//   await page.type('input', 'placeholder');
//   await page.screenshot({path: 'afterPassWord.png'});
//   await Promise.all([
//     page.waitForNavigation(),
//     page.click('#submit'),
//     console.log('clicked')
// ])
// await page.screenshot({path: 'LogedIn.png'});

// console.log('before waiting');
// await page.evaluate(async() => {
//   setTimeout(function(){
//       console.log('waiting');
//   }, 100000)
// });
// console.log('after waiting');


  await browser.close();
})();

