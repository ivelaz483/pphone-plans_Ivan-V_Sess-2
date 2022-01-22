function Plan(name, price, space, transfer, pages,discountMonths) 
{
this.name = name;
this.price = price;
this.space = space;
this.transfer = transfer;
this.pages = pages;
this.discountMonths = discountMonths;
this.calcAnnual=function(percentIfDisc) {
                    var bestPrice = this.price;
                    console.log("Price" + bestPrice);
                    var currDate = new Date();
                    console.log("Current Date " +currDate);
                    var thisMo = currDate.getMonth();
                    console.log("This Month " +thisMo);
                    for (var i = 0; i < this.discountMonths.length; i++)
                     {
 
                    if (this.discountMonths[i] === thisMo)
                     {
                    bestPrice = this.price * percentIfDisc;
                    break;}
                    console.log("Best Price" +bestPrice);
                    }
                    return bestPrice * 12;
                    console.log("Price with no discount" + bestPrice);

                }           
            }
       
 
 var plan1 = new Plan("Basic", 9.99, 100, 1000, 10,[0,7]);
 var plan2 = new Plan("Premium", 19.99, 500, 5000, 50,[0,7,11]);
 var plan3 = new Plan("Ultimate", 39.99, 2000, 20000, 500,[0,7]);
 
 
 var annualPrice = plan2.calcAnnual(0.80);
 document.getElementById('discount').textContent= "Discounted Price : " + annualPrice.toFixed(2);

 var finalPrice = plan2.calcAnnual(1);
 document.getElementById('ndiscount').textContent= "Full Price : " + finalPrice.toFixed(2);



             
