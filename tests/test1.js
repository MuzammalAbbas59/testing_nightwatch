function focusElement(type, selector) {
    return browser.execute(function click(selType, sel) {
      let ele;
      if (selType=== 'css') { 
        ele = document.querySelector(sel);}
      else {
        ele = document.evaluate(sel, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      }
      return ele['focus']();
    }, [type, selector], (result) =>{ console.log(result);
    });
}
  
  exports.command = focusElement;

module.exports = {

"All jobs ":function(browser){

    //test to redirect towards website
browser.url("https://www.jobify.live/")
browser.pause(5000)


//test to click on login button
browser.click("#root > main > div > div > a")
browser.pause(5000)

//login
        /*   .click('#root > section > form > div:nth-child(3) > input')
                .pause(5000)
                .setValue('#root > section > form > div:nth-child(3)', 'l181121@lhr.nu.edu.pk')
                .click('#root > section > form > div:nth-child(4) > inputord')
                .pause(5000)
                .setValue('#root > section > form > div:nth-child(4) > inputord', 'mab51214')
                browser.execute("jQuery('#root > section > form > div:nth-child(3) > input").val('l18@;hr.nu.edu.pk');
                browser.execute("jQuery('#root > section > form > div:nth-child(4) >  inputord").val('mab51214');
               */
          /*      var email = jQuery("#root > section > form > div:nth-child(3) > input");
                email.val('l181121@lhr.nu.edu.pk');         */
           

//test to check empty values
browser.click("#root > section > form > button")
browser.pause(5000)


//test to check not register button

browser.click("#root > section > form > p > button")
browser.pause(5000)




//back to login
browser.click("#root > section > form > p > button")
browser.pause(5000)



//aLL job button

browser.click("#root > section > main > aside.sc-pVTFL.hnJCWz > div > div > div > a:nth-child(2)")
browser.pause(5000)

//add job
browser.click("#root > section > main > aside.sc-pVTFL.hnJCWz > div > div > div > a:nth-child(3)")
browser.pause(5000)


//profile
browser.click("#root > section > main > aside.sc-pVTFL.hnJCWz > div > div > div > a:nth-child(4)")
browser.pause(5000)
















}





}