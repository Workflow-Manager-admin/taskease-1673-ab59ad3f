import { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// PUBLIC_INTERFACE
const AddTask = ({ onAdd }) => {
  /**
   * Component for adding new tasks with an input field and submit button
   * @param {Function} onAdd - Function to handle adding new tasks
   */
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.paper',
        borderRadius: 1,
        mb: 3,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'primary.main' }}>
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default AddTask;
