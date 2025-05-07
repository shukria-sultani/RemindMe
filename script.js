let formToSubmit = document.getElementById("userInputs");
formToSubmit.addEventListener("submit", (event) => {
    remindTask();

});

function remindTask(){
    let task = document.getElementById('taskDescription').value;
    let dateAndTimeInput = document.getElementById('dateTime').value;
 ;

    let currentDateAndTime = new Date();
    let reminderDateTime = new Date(dateAndTimeInput);

    if(reminderDateTime <= currentDateAndTime ){
        alert("Please set future dates!");
    }
    else{
        Notification.requestPermission().then((permission)=>{
            if (permission === 'granted') {
                const timeDiff = reminderDateTime.getTime() - currentDateAndTime.getTime();
                setTimeout(() => {
                    let taskRemindMessage = new Notification(`Hey, You need to do this task:\n${task}`);

                }, timeDiff);
            }
        });
        alert("Will Remind You!")
       
    
    }
       

}