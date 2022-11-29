//Maimuna Ullah, Web Development Pd. 7/8 Odd, 11/28/22, Count de Money//

function initialize()
{
    pennies = document.getElementById("pennies");
	penniesValue = document.getElementById("penniesValue");
	nickels = document.getElementById("nickels");
	nickelsValue = document.getElementById("nickelsValue");
	dimes = document.getElementById("dimes");
	dimesValue = document.getElementById("dimesValue");
	quarters = document.getElementById("quarters");
	quartersValue = document.getElementById("quartersValue");
    halves = document.getElementById("halves");
    halvesValue = document.getElementById("halvesValue");
    dollars = document.getElementById("dollars");
    dollarsValue = document.getElementById("dollarsValue");
	total = document.getElementById("total");
				
	pennyNum = 0;
    pennyValue = 0;
    nickelNum = 0;
    nickelValue = 0;
    dimeNum = 0;
    dimeValue = 0;
    quarterNum = 0;
    quarterValue = 0;
    halfNum = 0;
    halfValue = 0;
    dollarNum = 0;
    dollarValue = 0;
    totalValue = 0;
			
	display();
}

function addOnePenny()
{
	pennyNum++;
    pennyValue+=0.01;
    totalValue+=0.01;
    display();
}
		
function subtractOnePenny()
{
    if (pennyNum > 0)
    {
        pennyNum--;
        pennyValue-=0.01;
        totalValue-=0.01;
        display();
    }
}

function addOneNickel()
{
    nickelNum++;
    nickelValue+=0.05;
    totalValue+=0.05;
    display();
}

function subtractOneNickel()
{
    if (nickelNum > 0)
    {
        nickelNum--;
        nickelValue-=0.05;
        totalValue-=0.05;
        display();
    }
}

function addOneDime()
{
    dimeNum++;
    dimeValue+=0.1;
    totalValue+=0.1;
    display();
}

function subtractOneDime()
{
    if (dimeNum > 0)
    {
        dimeNum--;
        dimeValue-=0.1;
        totalValue-=0.1;
        display();
    }
}

function addOneQuarter()
{
    quarterNum++;
    quarterValue+=0.25;
    totalValue+=0.25;
    display();
}

function subtractOneQuarter()
{
    if (quarterNum > 0)
    {
        quarterNum--;
        quarterValue-=0.25;
        totalValue-=0.25;
        display();
    }
}

function addOneHalf()
{
    halfNum++;
    halfValue+=0.5;
    totalValue+=0.5;
    display();
}

function subtractOneHalf()
{
    if (halfNum > 0)
    {
        halfNum--;
        halfValue-=0.5;
        totalValue-=0.5;
        display();
    }
}

function addOneDollar()
{
    dollarNum++;
    dollarValue+=1;
    totalValue+=1;
    display();
}

function subtractOneDollar()
{
    if (dollarNum > 0)
    {
        dollarNum--;
        dollarValue-=1;
        totalValue-=1;
        display();
    }
}

function display()
{
    pennies.innerHTML = pennyNum;
    if (pennyValue < 0)
    {
        penniesValue.innerHTML = (pennyValue*-1).toFixed(2);
    }
    else
    {
        penniesValue.innerHTML = pennyValue.toFixed(2);
    }
    nickels.innerHTML = nickelNum;
    nickelsValue.innerHTML = nickelValue.toFixed(2);
    dimes.innerHTML = dimeNum;
    dimesValue.innerHTML = dimeValue.toFixed(2);
    quarters.innerHTML = quarterNum;
    quartersValue.innerHTML = quarterValue.toFixed(2);
    halves.innerHTML = halfNum;
    halvesValue.innerHTML = halfValue.toFixed(2);
    dollars.innerHTML = dollarNum;
    dollarsValue.innerHTML = dollarValue.toFixed(2);
    if (totalValue < 0)
    {
        total.innerHTML = (totalValue*-1).toFixed(2);
    }
    else
    {
        total.innerHTML = totalValue.toFixed(2);
    }
}