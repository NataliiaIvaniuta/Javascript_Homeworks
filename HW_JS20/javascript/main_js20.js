"use strict";

function meetDeadlineOrNo(teamSpeed, backlog, deadline) {
    let totalPointsPerDay = teamSpeed.reduce((a, b) => a + b);
      console.log(totalPointsPerDay);
    let tasksPerHour = totalPointsPerDay / 8;
      console.log(tasksPerHour);
    let totalTasks = backlog.reduce((a, b) => a + b);
      console.log(totalTasks);
    let totalWorkingHours=totalTasks/tasksPerHour;
      console.log(totalWorkingHours);
    let today = new Date();
      console.log(today);


      //calculate working hours till the deadline
    function findWorkingTime(deadline) {
        let need=0 ;
        for (let i = today.valueOf(); i < deadline.valueOf(); i = (today.setMinutes(today.getMinutes() + 1)).valueOf()) {
            if (today.getDay() !== 0 || today.getDay() !== 6 && ((today.getHours() >= 9 || today.getHours() < 17))) {
                need++
            }
        }
        return need/60 ;
    }

//
    let workingDueTime = findWorkingTime(deadline);//working hours before deadline
    console.log(workingDueTime);
    let dueDays = Math.floor((workingDueTime - totalWorkingHours)/24);// days before deadline
    console.log(dueDays);
    let extraHours = Math.ceil(totalWorkingHours-workingDueTime);//working hours after deadline
    console.log(extraHours);

//
    if (totalWorkingHours <= workingDueTime) {
        alert(`Все задачи будут успешно выполнены за ${dueDays} дней до наступления дедлайна!`)
    } else {
        alert(`Команде разработчиков придется потратить дополнительно ${extraHours} часов после дедлайна, чтобы выполнить все задачи в беклоге!`)
    }
//condition for the deadline
    if (deadline<new Date()){
        alert("Дедлайн не может быть раньше текущего времени");
    }
}

meetDeadlineOrNo([2, 3, 5, 1], [150, 3, 25, 17], new Date(2019, 6, 2));
