function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    // i wnat  to add to  input the person his day off like friday or sunday saturday
    const daysExcludingFridays = [];
    const daysWorkedExcludingFridays = [];
    const monthlyTargets = [];
    let totalWorkingDays = 0;
    
    // Helper function to get the number of days in a month
    function daysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    // Helper function to count non-Friday working days in a given month
    function countNonFridayDays(year, month, startDay = 1, endDay = daysInMonth(year, month)) {
        let count = 0;
        for (let day = startDay; day <= endDay; day++) {
            const date = new Date(year, month, day);
            if (date.getDay() !== 5) { // Exclude Fridays (Friday is day 5 in JavaScript)
                count++;
            }
        }
        return count;
    }

    // Loop over each month between startDate and endDate
    let currentDate = new Date(start);
    while (currentDate <= end) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        const totalDaysInMonth = daysInMonth(year, month);
        const totalNonFridays = countNonFridayDays(year, month);

        daysExcludingFridays.push(totalNonFridays);
        
        // Calculate the range for this month based on start and end dates
        let startDay = 1;
        let endDay = totalDaysInMonth;
        
        if (year === start.getFullYear() && month === start.getMonth()) {
            startDay = start.getDate();
        }
        if (year === end.getFullYear() && month === end.getMonth()) {
            endDay = end.getDate();
        }

        const workedNonFridays = countNonFridayDays(year, month, startDay, endDay);
        daysWorkedExcludingFridays.push(workedNonFridays);

        totalWorkingDays += workedNonFridays;
        currentDate.setMonth(currentDate.getMonth() + 1); // Move to the next month
    }

    // Distribute the total target across the valid working days
    for (let i = 0; i < daysWorkedExcludingFridays.length; i++) {
        const monthlyTarget = (daysWorkedExcludingFridays[i] / totalWorkingDays) * totalAnnualTarget;
        monthlyTargets.push(monthlyTarget);
    }

    const totalTarget = monthlyTargets.reduce((sum, value) => sum + value, 0);

    return {
        daysExcludingFridays,
        daysWorkedExcludingFridays,
        monthlyTargets,
        totalTarget
    };
}

// Example usage:
console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220));
