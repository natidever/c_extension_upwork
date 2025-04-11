console.log("Content script loaded");
console.log("Found jobs ",document.querySelectorAll('.job-tile').length);


function insertButton(){
    const jobCards = document.querySelectorAll('.job-tile');

    jobCards.forEach(card =>{
      const jobLinkElement = card.querySelector('a[data-test*="job-tile-title-link"]');
      console.log("link :",jobLinkElement)
      var actualLink=''

      if (jobLinkElement){
         actualLink = jobLinkElement.href
        console.log("Job link",actualLink)
      }else {
        console.log("No job link is")
      }
        const btn = document.createElement('button');
        btn.innerText = "Send"
        btn.className = 'send-to-telegram-btn';
        btn.style.cssText = `
          margin-top: 10px;
          padding: 6px 12px;
          background-color: #14a800;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        `;
        card.appendChild(btn)
        console.log("Button added to the job card:", card);

        btn.onclick = ()=>{
          const telegramBotUrl = `https://api.telegram.org/bot7400061624:AAHTJ_qrCkrwDachTcxf58yWlJtFrXHZEGU/sendMessage?chat_id=1346536777&text=${encodeURIComponent(actualLink)}`;
        
          fetch(telegramBotUrl).then(
            res=> console.log("Message sent successfully",res.json)
          ).catch(
            err=> console.log("Error sending to telegram",err)
          )


        }
    })


}


insertButton();





































