import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { red } from '@mui/material/colors';

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
                <Box sx={{ p: 3, width: 'fit-content' }}>
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
                sx={{ flexGrow: 1, bgcolor: 'rgb(182, 255, 239)', display: 'flex', mt: 2, height: '400px' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', width: '150px', display: 'flex' }}
                >
                    {data.map((item, index) => {
                        return (
                            <Tab sx={{color: 'rgb(17, 61, 52)'}} key={index} label={`${index +1}. ${item.name}`} {...a11yProps(index)} />
                        )
                    })}
                </Tabs>
                {data.map((item, index) => {
                    return (
                    props.prescriptions ?
                    <TabPanel key={index} value={value} index={index}>
                                <Typography variant='body1' color={'rgb(17, 61, 52)'}><b>Prescription id:</b> {item.id}</Typography>
                                <Typography variant='body1' color={'rgb(17, 61, 52)'}><b>Pet id:</b> {item.pet_id}</Typography>
                                <Typography variant='body1' color={'rgb(17, 61, 52)'}><b>Medication id:</b> {item.medication_id}</Typography>
                                <Typography variant='body1' color={'rgb(17, 61, 52)'}><b>Medicament: </b> {item.medicament}</Typography>
                                <Typography variant='body1' color={'rgb(17, 61, 52)'}><b>Description:</b> {item.description}</Typography>
                                <Typography variant='body1' color={'rgb(17, 61, 52)'}><b>Assigned:</b> {item.assign_time}</Typography>
                                <Typography variant='body1' color={'rgb(17, 61, 52)'}><b>Client email:</b> {item.client_email}</Typography>
                                <Typography variant='body1' color={'rgb(17, 61, 52)'}><b>Name:</b> {item.name}</Typography>
                                <Typography variant='body1' color={'rgb(17, 61, 52)'}><b>Date of birth:</b> {item.dob}</Typography>
                            </TabPanel> 
                    :
                            <TabPanel key={index} value={value} index={index}>
                                <Typography variant='body1' color={'rgb(80,80,80)'}><b>Log id:</b> {item.id}</Typography>
                                <Typography variant='body1' color={'rgb(80,80,80)'}><b>Client email:</b> {item.client_email}</Typography>
                                <Typography variant='body1' color={'rgb(80,80,80)'}><b>Pet id:</b> {item.pet_id}</Typography>
                                <Typography variant='body1' color={'rgb(80,80,80)'}><b>Name:</b> {item.name}</Typography>
                                <Typography variant='body1' color={'rgb(80,80,80)'}><b>Date of birth:</b> {item.dob}</Typography>
                                <Typography variant='body1' color={'rgb(80,80,80)'}><b>Status:</b> {item.status}</Typography>
                                <Typography variant='body1' color={'rgb(80,80,80)'}><b>Description:</b> {item.description}</Typography>
                            </TabPanel>
                )
                })}

            </Box>

        </Paper>
    );
}