const webdriver = require('selenium-webdriver');
const By = webdriver.By ;


     
const basicExample = async () => {
          try{
              var driver = new webdriver.Builder().forBrowser('chrome').build();
      
              await driver.get('http://localhost:3000/');
      
              await driver.getTitle().then(function(title) {
                        //  console.log("The title is: " + title)
                  });

             await driver.findElement(By.css('.btnSort')).getText().then(function(text){
                           //   console.log("The text is: " + text)
             });

             await setTimeout(function(){
                    driver.findElement(By.css('.btnSort')).click();
             },2000)
             await setTimeout(function(){
                    driver.quit();
             },3000)

          }
      
          catch(err){
              handleFailure(err, driver)
          }
      }
      
      basicExample();