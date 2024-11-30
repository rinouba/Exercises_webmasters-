
# JavaScript Exercises with Jest

This repository contains solutions to four JavaScript exercises, each tested using **Jest**. Follow the instructions below to set up, install dependencies, and run the tests.

## Project Structure

The project is organized as follows:

```
.
├── Exercise 1
│   ├── evenNumbers.js
│   ├── evenNumbers.test.js
│   ├── package.json
├── Exercise 2
│   ├── largestNumber.js
│   ├── largestNumber.test.js
│   ├── package.json
├── Exercise 3
│   ├── ReverseAString.js
│   ├── ReverseAString.test.js
│   ├── package.json
├── Exercise 4
│   ├── removeDuplicates.js
│   ├── removeDuplicates.test.js
│   ├── package.json
```

Each exercise folder contains:
- **JavaScript file**: The implementation of the problem.
- **Test file**: The corresponding tests for the implementation, written using Jest.
- **package.json**: A minimal configuration file for Jest.

---

## Prerequisites

To run this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- npm (comes with Node.js)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Navigate to an exercise folder**:
   ```bash
   cd "Exercise 1"  # Example: Move to the first exercise folder
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

   Repeat this step for each exercise folder (`Exercise 2`, `Exercise 3`, `Exercise 4`).

---

## Running the Tests

1. **Navigate to the folder of the exercise you want to test**:
   ```bash
   cd "Exercise 1"
   ```

2. **Run the tests**:
   ```bash
   npx jest
   ```

3. **View the results**:
   Jest will display the results of the tests for the current exercise.

   Example output:
   ```
    PASS  ./evenNumbers.test.js
    ✓ correctly identifies even numbers (2 ms)
    ✓ handles edge cases

    Test Suites: 1 passed, 1 total
    Tests:       2 passed, 2 total
   ```

---

## Notes

- Each exercise is self-contained, so you can work on or test them independently.
- If you add more exercises, follow the same structure to maintain consistency.

Feel free to modify and extend the exercises or tests as needed!
