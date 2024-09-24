

// **********get element ************
const mainBalaceEl=document.getElementById('main-balance');
const inputValueEl1=document.getElementById('input-field-1');
const donateBalaceEl1=document.getElementById('donate-balance-1');
const donateButtonEl1=document.getElementById('donate-btn-1');
const modalEl1=document.getElementById('modal-1');
const closeButtonEl1=document.getElementById('close-btn-1');


// ******add event listenear on donate button one***********

donateButtonEl1.addEventListener('click',function(){
    const inputValue= getInputValueById('input-field-1');
    // const inputValue=parseFloat(inputValueEl1.value)
    const mainBalance=getTextValueById('main-balance');
    
    if(isNaN(inputValue) || inputValue<0 || mainBalance<inputValue ){
        alert('Invalid Amount')
        document.getElementById('input-field-1').value=''
        return
    }
    // calculate part donate balance
    const donateBalance= getTextValueById('donate-balance-1');

    const newdonateBalance= donateBalance + inputValue ;
    document.getElementById('donate-balance-1').textContent= newdonateBalance
    document.getElementById('modal-1').classList.remove('hidden')
    
    inputValueEl1.value=''
    // calculate part main Balance

    const newMainBalance=mainBalance - inputValue ;
    document.getElementById('main-balance').textContent=newMainBalance;
})

// add event listener close button
document.getElementById('close-btn-1').addEventListener('click',function(){
    document.getElementById('modal-1').classList.add('hidden')
})
