// IMPOSTA CONTATTO
function addContact() {
    let cName = document.querySelector('#name').value.toUpperCase();
    let cNumber = document.querySelector('#number').value;
    let displayNotification = document.querySelector('#displayNoti');
  
    if (cName == '' || cNumber == '') {
      displayNotification.innerHTML = 'Prego inserisci i dettagli!';
      displayNotification.style.color = 'red';
    } else {
      // IMPOSTA AVVISI
      localStorage.setItem(cName, cNumber);
      displayNotification.innerHTML = '✓ Contatto Aggiunto Con Successo ';
      displayNotification.style.color = 'green';
    }
    setInterval(() => {
      displayNotification.innerHTML = '';
    }, 2000);
  }
  
  // OTTENERE CONTATTO
  function getContact() {
    let displayDetail = document.querySelector('#displayContact');
    let displayOutput = document.getElementById('displayContact');
    displayOutput.classList.add('displayContactStyle');
    let getContactName = document
      .querySelector('#getContactName')
      .value.toUpperCase();
  
    // OTTIENI AVVISI
    let output = localStorage.getItem(getContactName);
    displayDetail.innerHTML = `${getContactName} : ${
      output == null ? '(   Questo dettaglio di contatto non è valido' : `+39 ${output}`
    }`;
    getContactName = '';
  }
  
  function reset() {
    location.reload();
  }
  
