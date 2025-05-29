import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// PUBLIC_INTERFACE
const Task = ({ task, onComplete, onDelete }) => {
  /**
   * Component for displaying individual task items with complete and delete actions
   * @param {Object} task - Task object containing id, title, and completed status
   * @param {Function} onComplete - Function to handle task completion toggle
   * @param {Function} onDelete - Function to handle task deletion
   */
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 1,
        mb: 1,
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.05)',
        },
      }}
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        onChange={() => onComplete(task.id)}
        sx={{
          color: 'primary.main',
          '&.Mui-checked': {
            color: 'primary.main',
          },
        }}
      />
      <ListItemText
        primary={task.title}
        sx={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? 'text.secondary' : 'text.primary',
        }}
      />
    </ListItem>
  );
};

export default Task;
