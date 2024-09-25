

// **********get element ************
const mainBalaceEl=document.getElementById('main-balance');
const inputValueEl1=document.getElementById('input-field-1');
const donateBalaceEl1=document.getElementById('donate-balance-1');
const donateButtonEl1=document.getElementById('donate-btn-1');
const modalEl1=document.getElementById('modal-1');
const closeButtonEl1=document.getElementById('close-btn-1');
const  historyContainerEl=document.getElementById('history-container')


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
    document.getElementById('donate-balance-1').textContent= newdonateBalance.toFixed(2)
    document.getElementById('modal-1').classList.remove('hidden')
    
    inputValueEl1.value=''

     historyContainerEl.innerHTML +=`
     <div class="border-2 p-5 rounded-md mt-4">
      <p>${inputValue} taka is Donated for Flood Relief in Feni,Bangladesh  </P>
      <p> ${new Date()} </p>
      </div>
         
     
      `
    // calculate part main Balance

    const newMainBalance=mainBalance - inputValue ;
    document.getElementById('main-balance').textContent=newMainBalance.toFixed(2);
     // history
    

    
})

// add event listener close button
document.getElementById('close-btn-1').addEventListener('click',function(){
    document.getElementById('modal-1').classList.add('hidden')
})


// **********history addeventlistener************

const donationButtonEl=document.getElementById('donation-btn');
const historyButtonEl=document.getElementById('history-btn')
const mainSectionEl=document.getElementById('main-section');


document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('main-section').classList.add('hidden');
    historyContainerEl.classList.remove('hidden')

    historyButtonEl.classList.add('bg-primary')
    historyButtonEl.classList.remove('border-dark_green')
    donationButtonEl.classList.remove('bg-primary')
    donationButtonEl.classList.add('border-dark_green')
    donationButtonEl.classList.add('bg-white','border-dark_green','border-2')

})
    

donationButtonEl.addEventListener('click',function(){
    document.getElementById('main-section').classList.remove('hidden');
    historyContainerEl.classList.add('hidden')
    
    historyButtonEl.classList.remove('bg-primary')
    historyButtonEl.classList.add('border-dark_green')
    donationButtonEl.classList.add('bg-primary')
    donationButtonEl.classList.remove('border-dark_green')
    donationButtonEl.classList.remove('bg-white','border-dark_green','border-2')
  


})
