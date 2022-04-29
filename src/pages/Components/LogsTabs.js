import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs(props) {
    const [value, setValue] = React.useState(0);
    const data = props.data
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper>
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', mt:3, height:'400px'}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {data.map((item, index) => {
                    return (
                        <Tab key={index} label={`${item.id}. ${item.name}`} {...a11yProps(index)} />
                    )
                })}
            </Tabs>
            {data.map((item, index) => {
                return (
                    <TabPanel key={index} value={value} index={index}>
                        <Typography variant='body1'>Log id: <b>{item.id}</b></Typography>
                        <Typography variant='body1'>Client email: <b>{item.client_email}</b></Typography>
                        <Typography variant='body1'>Pet id: <b>{item.pet_id}</b></Typography>
                        <Typography variant='body1'>Name: <b>{item.name}</b></Typography>
                        <Typography variant='body1'>Date of birth: <b>{item.dob}</b></Typography>
                        <Typography variant='body1'>Status: <b>{item.status}</b></Typography>
                        <Typography variant='body1'>description: <b>{item.description}</b></Typography>
                    </TabPanel>
                )
            })}

        </Box>

        </Paper>
    );
}