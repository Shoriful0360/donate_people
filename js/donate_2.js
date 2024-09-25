// // **********get element ************

const inputValueEl2=document.getElementById('input-field-2');
const donateBalaceEl2=document.getElementById('donate-balance-2');
const donateButtonEl2=document.getElementById('donate-btn-2');
const modalEl2=document.getElementById('modal-2');
const closeButtonEl2=document.getElementById('close-btn-2');




// ******add event listenear on donate button one***********

donateButtonEl2.addEventListener('click',function(){
    console.log('vba')
    const inputValue= getInputValueById('input-field-2');
    
    const mainBalance=getTextValueById('main-balance');
   
    
    if(isNaN(inputValue) || inputValue<0 || mainBalance<inputValue ){
        alert('Invalid Amount')
        document.getElementById('input-field-2').value=''
        return
    }
   
    // calculate part donate balance
    const donateBalance= getTextValueById('donate-balance-2');

    const newdonateBalance= donateBalance + inputValue ;
    document.getElementById('donate-balance-2').textContent= newdonateBalance.toFixed(2)
    document.getElementById('modal-2').classList.remove('hidden')
    
    inputValueEl2.value=''

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
document.getElementById('close-btn-2').addEventListener('click',function(){
    document.getElementById('modal-2').classList.add('hidden')
})


