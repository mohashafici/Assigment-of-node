
# Node.js Target Calculation Excluding Specific Days

## Project Description

This project implements a function `calculateTotalTarget` that calculates the proportional distribution of an annual target across multiple months, taking into account only the valid working days within a given date range. Specifically, Fridays are excluded from the working days. The function handles various date ranges, spanning multiple months or years, and accurately distributes the target based on the number of valid working days.

## How to Run

### Prerequisites

- Node.js must be installed on your system. You can download it from [Node.js official website](https://nodejs.org).

### Steps to Run the Code:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohashafici/Assigment-of-node.git
   cd assign.js
   ```

2. **Run the script using Node.js:**
   ```bash
   node assign.js
   ```


### Example Usage

Here’s an example of how the function works:

```js
const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);
```

**Expected Output:**
```json
{
  "daysExcludingFridays": [27, 25, 26],
  "daysWorkedExcludingFridays": [27, 25, 26],
  "monthlyTargets": [435, 434.99999999999994, 435],
  "totalTarget": 1305
}
```

## Function Explanation

### `calculateTotalTarget(startDate, endDate, totalAnnualTarget)`

- **Parameters:**
  - `startDate` (string): The starting date of the target calculation in `YYYY-MM-DD` format.
  - `endDate` (string): The ending date of the target calculation in `YYYY-MM-DD` format.
  - `totalAnnualTarget` (number): The total annual target to be distributed proportionally across the working days in the specified date range.

- **Return Value:**
  The function returns an object with the following properties:
  - `daysExcludingFridays`: An array containing the number of non-Friday working days for each month in the specified date range.
  - `daysWorkedExcludingFridays`: An array containing the actual number of non-Friday working days worked within the date range.
  - `monthlyTargets`: An array representing the target assigned to each month, proportional to the working days.
  - `totalTarget`: The total calculated target for the given date range.

### How It Works:
- **Date Parsing:** The `startDate` and `endDate` are parsed as JavaScript Date objects.
- **Looping Over Months:** The function loops through each month between the start and end dates, calculating the total number of working days (excluding Fridays).
- **Excluding Fridays:** Using JavaScript's `Date.getDay()` method, Fridays are excluded from the working day count (as Friday corresponds to `5` in JavaScript's `getDay()`).
- **Proportional Target Calculation:** The total target is distributed based on the number of working days in each month.

## Assumptions

- **Valid Working Days:** The function assumes that working days are Monday to Thursday, with Fridays excluded. Weekends (Saturdays and Sundays) are also assumed to be non-working days.
- **Date Range Handling:** The function can handle date ranges that start and end mid-month, as well as ranges that span multiple months or years.

## Limitations

- **No Support for Custom Holidays:** The current implementation does not account for custom holidays or other non-working days, apart from Fridays.
- **Leap Year Handling:** The function handles leap years by dynamically determining the number of days in February, but it does not handle cases with custom holiday closures.
- **Performance:** While the function is designed to handle large date ranges, further optimization could be explored for extremely large ranges spanning several years.

## Example

If you call the function as follows:
```js
calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
```

You would get this output:
```json
{
  "daysExcludingFridays": [27, 25, 26],
  "daysWorkedExcludingFridays": [27, 25, 26],
  "monthlyTargets": [435, 434.99999999999994, 435],
  "totalTarget": 1305
}
```

## License

This project is open-source and free to use under the MIT License.

---

Make sure to replace the repository URL (`https://github.com/mohashafici/Assigment-of-node`) with the actual URL of your GitHub repository.