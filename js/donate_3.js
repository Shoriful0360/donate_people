// // **********get element ************

const inputValueEl3=document.getElementById('input-field-3');
const donateBalaceEl3=document.getElementById('donate-balance-3');
const donateButtonEl3=document.getElementById('donate-btn-3');
const modalEl3=document.getElementById('modal-3');
const closeButtonEl3=document.getElementById('close-btn-3');




// ******add event listenear on donate button one***********

donateButtonEl3.addEventListener('click',function(){
    
    const inputValue= getInputValueById('input-field-3');
    
    const mainBalance=getTextValueById('main-balance');
   
    
    if(isNaN(inputValue) || inputValue<0 || mainBalance<inputValue ){
        alert('Invalid Amount')
        document.getElementById('input-field-3').value=''
        return
    }
   
    // calculate part donate balance
    const donateBalance= getTextValueById('donate-balance-3');

    const newdonateBalance= donateBalance + inputValue ;
    document.getElementById('donate-balance-3').textContent= newdonateBalance.toFixed(2)
    document.getElementById('modal-3').classList.remove('hidden')
    
    inputValueEl3.value=''

     historyContainerEl.innerHTML +=`
     <div class="border-2 p-5 rounded-md mt-4">
      <p>${inputValue} taka is Donated for Aid for Injured in the Quota Movement,Bangladesh   </P>
      <p> ${new Date()} </p>
      </div>
         
     
      `
    // calculate part main Balance

    const newMainBalance=mainBalance - inputValue ;
    document.getElementById('main-balance').textContent=newMainBalance.toFixed(2);
     // history
    

    
})

// add event listener close button
document.getElementById('close-btn-3').addEventListener('click',function(){
    document.getElementById('modal-3').classList.add('hidden')
})


