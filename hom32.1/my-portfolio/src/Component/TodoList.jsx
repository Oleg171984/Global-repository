import React, { useState } from 'react';
import { Container, Card, CardContent, Grid, Button, TextField, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <Container maxWidth="md" sx={{ mt: 10 }}>  {/* Додано mt: 10 для відступу від хедера */}
            <section id="todo-list" style={{ marginBottom: '40px' }}>
                {/* Заголовок секції */}
                <Typography variant="h4"  color="grey" sx={{ mb: 2, textAlign: 'center' }}>
                    Todo List
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
                    Додайте свої завдання до цього списку і позначайте їх як виконані!
                </Typography>
            </section>

            <Card sx={{ p: 3 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                label="New Task"
                                variant="outlined"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" startIcon={<Add />} onClick={addTask} fullWidth>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                    <List sx={{ mt: 2 }}>
                        {tasks.map((t, index) => (
                            <ListItem key={index} secondaryAction={
                                <IconButton edge="end" color="error" onClick={() => removeTask(index)}>
                                    <Delete />
                                </IconButton>
                            }>
                                <ListItemText primary={t} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Container>
    );
};

export default TodoList;
