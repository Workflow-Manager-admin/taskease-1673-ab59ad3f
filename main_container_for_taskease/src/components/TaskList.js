import { useState } from 'react';
import { List, Box, Typography } from '@mui/material';
import Task from './Task';
import AddTask from './AddTask';

// PUBLIC_INTERFACE
const TaskList = () => {
  /**
   * Main container component for managing tasks state and rendering task list
   * Handles adding, completing, and deleting tasks
   */
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Box>
      <AddTask onAdd={addTask} />
      {tasks.length === 0 ? (
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mt: 4 }}
        >
          No tasks yet. Add a task to get started!
        </Typography>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'transparent' }}>
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onComplete={toggleComplete}
              onDelete={deleteTask}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default TaskList;
