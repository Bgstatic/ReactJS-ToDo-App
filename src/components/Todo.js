import React from 'react'
import '../styles/Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon } from '@material-ui/core';

function Todo({ todo }) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={todo} />
            </ListItem>
        </List>
    )
}

export default Todo
