/*Assigning variables to the input tags*/
const billAmt = document.getElementById('totalBill')  
const tipPerc = document.getElementById('tipPercent')  
const finalAmt = document.getElementById('finalAmount') 
const people = document.getElementById('People') 
const inc = document.getElementById('increase')
const dec = document.getElementById('decrease')

let peopleCount = Number(people.innerText)

function calculateBill(){
    const bill = Number(billAmt.value); 
    const tP = Number(tipPerc.value) / 100; 


    const tipAmt = tP * bill;
    const TBill = bill + tipAmt; 

    const finalBill = TBill / peopleCount;

    finalAmt.innerText =  `$${finalBill.toFixed(2)}`
}

function increasePeople(){
    peopleCount += 1
    people.innerText = peopleCount

    calculateBill()
}

function decreasePeople(){
    if (peopleCount <= 1) {
        return
    }
    peopleCount -= 1
    people.innerText = peopleCount
    calculateBill()
}