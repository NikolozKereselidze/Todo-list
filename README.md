# Task Management App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Todo App is a web application designed to help users organize and manage their tasks efficiently. With features such as priority settings, task status updates, and project categorization, this app aims to streamline task management for both personal and professional use.

## Features

- **Create Tasks**: Add new tasks with a title, description, date, priority level and a complete status.
- **Update Task Status**: Mark tasks as complete or incomplete.
- **Change Task Priority**: Easily update the priority of tasks.
- **Project Management**: Categorize tasks under different projects.
- **Persistent Storage**: All tasks and projects are stored in the browser's local storage, ensuring data is retained across sessions.

## Installation

To run the Task Management App locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/NikolozKereselidze/Todo-list.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Todo-list
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

## Usage

### Creating a Project

1. Click the Plus + icon next to the Projects
2. Enter the project name
3. Click "Add Project" to save the task.

### Creating a Task

1. Navigate to any created project page.
2. Click to the Plus + icon next to the project name.
3. Enter the task details including title, date, description, and priority.
4. Click "Add Task" to save the task.

### Updating Task Status

1. Click on the status icon (X mark or check mark) next to the task title.
2. The status will toggle between "complete" and "incomplete".

### Changing Task Priority

1. Click on the priority icon (low, medium, or high) next to the task description.
2. The priority will cycle through the available levels.

### Changing Task Project

1. Click on the user icon next to the task to move it to the next project.
2. The task will be reassigned to a different project.

### Viewing Tasks

- Navigate to the desired project to view its tasks.
- Use the "Today" section to view tasks due today.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a new branch**:

   ```bash
   git checkout -b feature-branch
   ```

3. **Commit your changes**:

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature-branch
   ```

5. **Open a pull request**

