/*Assigning variables to the input tags*/
const billAmt = document.getElementById('totalBill')
const tipPerc = document.getElementById('tipPercent')

const finalAmt = document.getElementById('finalAmount')

const calculateBill = () => {
    const bill = Number(billAmt.value);
    const tP = Number(tipPerc.value) / 100;

    const tipAmt = tP * bill;
    const finalBill = bill + tipAmt; 
    finalAmt.innerText =  `$${finalBill.toFixed(2)}`
}