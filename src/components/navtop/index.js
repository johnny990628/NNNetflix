import React, { useState } from 'react';

import { Tabs, Tab, Avatar, Badge, AppBar, Toolbar, InputBase, Typography, useMediaQuery } from '@mui/material';
import { Search, Email, Notifications } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    searchbar: {
        display: 'flex',
        alignItems: 'center',
        width: '20%',
        backgroundColor: 'var(--searchbar-color)',
        '&:hover': {
            backgroundColor: 'var(--searchbar-color-hover)',
        },
        borderRadius: '5px',
        padding: '5px',
    },
    input: {
        color: 'var(--text-color)',
        flexGrow: 1,
    },
    badge: {
        marginRight: '20px',
    },
    icons: {
        display: 'flex',
        alignItems: 'center',
    },
    searchButton: { marginRight: '20px' },
});

const Navtop = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down('md'));
    const [value, setValue] = useState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar color="transparent">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">NNNETFLIX</Typography>
                {!isPhone && (
                    <div className={classes.searchbar}>
                        <Search sx={{ color: 'var(--text-color)', margin: '0 10px' }} />
                        <InputBase placeholder="Search..." className={classes.input} />
                    </div>
                )}

                <Tabs value={value} textColor="inherit" onChange={handleChange}>
                    <Tab label="Main" component={Link} to="/" />
                    <Tab label="Popular" component={Link} to="/popular" />
                </Tabs>

                <div className={classes.icons}>
                    {isPhone && (
                        <Search
                            sx={{ color: 'var(--text-color)', margin: '0 10px' }}
                            className={classes.searchButton}
                        />
                    )}

                    <Badge badgeContent={4} color="primary" className={classes.badge}>
                        <Email />
                    </Badge>
                    <Badge badgeContent={6} color="primary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar color="primary">XUN</Avatar>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navtop;
