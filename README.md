# Dynamic Task Form Application

This repository contains a dynamic task form application built using React JS 18 with Next.js 13 framework, TypeScript for code quality, and Tailwind CSS for UI styling. The application allows users to create tasks with various fields, including start date, due date, duration, time spent, title, subtitle, description, and assignment to. It incorporates input validation and provides a summary of the submitted task upon completion.

## Table of Contents

- [Features](#features)
- [Instructions](#instructions)
  - [Task Form Requirements](#task-form-requirements)
  - [Validation](#validation)
  - [Form Submission and Summary](#form-submission-and-summary)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create tasks with various attributes such as title, subtitle, description, start date, due date, duration, time spent, and assignment.
- Input validation to ensure accurate and valid data entry.
- Summary display section showing all entered task details after successful submission.
- Utilizes the Context API for state management.
- Incorporates React Hooks for component state and lifecycle management.
- Fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) for the assignment dropdown list.

## Instructions

### Task Form Requirements

- **Title**: Input field for the title of the task.
- **Subtitle**: Input field for a brief description or subtitle of the task.
- **Description**: Text area for providing a detailed description of the task.
- **Start Date**: Date picker field for selecting the task's start date.
- **Due Date**: Date picker field for selecting the task's due date.
- **Duration in Hours**: Input field for estimated task duration, with control buttons.
- **Time Spent**: Input field for actual time spent on the task, using a time picker.
- **Assigned To**: Dropdown list to select the person or team to whom the task is assigned.

### Validation

The following validation checks are implemented:

- Start Date and Due Date must have a range of 1 to 6 days (inclusive). Due Date cannot be earlier than Start Date.
- Duration must be greater than 0 and not exceed 30 hours.
- Time Spent must be greater than 0.
- Title must be at least 3 characters.
- Description must not exceed 150 characters.
- All fields are required.

### Form Submission and Summary

- **Submit Button**: Clicking the "Submit" button validates the input data. If successful, the input form is hidden, and the task summary is displayed.
- **Summary Display**: The summary section includes all entered task details: start date, due date, duration, time spent, title, subtitle, description, and assigned to.

## Online Demo
check the hosted version of the website from here: https://qpros-ogz4-1mojzlrmm-ahmad-salman98.vercel.app/
## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ahmad-salman98/qpros`
2. Navigate to the project directory: `cd qpros`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open your browser and go to `http://localhost:3000`

## Usage

1. Fill in the task details in the form fields.
2. Ensure all validation criteria are met.
3. Click the "Submit" button.
4. Upon successful submission, the task summary will be displayed.

## API

The application fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) to populate the "Assigned To" dropdown list.

## Contributing

Contributions are welcome! If you have any improvements or suggestions, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as needed.
