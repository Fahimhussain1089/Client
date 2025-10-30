const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const colors = require('./utils/consolecolors');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const event = req.body;
    
    console.log(colors.pink(`📨 Event Received: ${event.type}`));

    try {
        // Only send to services that actually exist
        const services = [
            ('http://localhost:4000/events' , event ), // Posts service
            ('http://localhost:4001/events' , event ) // Comments service
            ('http://localhost:4002/events' , event )
              ('http://localhost:4003/events' , event )
            // Remove port 4002 if you don't have a service there
        ];

        // Send events to all services in parallel with error handling
        const promises = services.map(serviceUrl => 
            axios.post(serviceUrl, event).catch(error => {
                console.log(colors.yellow(`⚠ ${serviceUrl} not available`));
                return null; // Don't fail the entire request
            })
        );

        await Promise.all(promises);
        
        console.log(colors.orange(`✓ Event ${event.type} distributed`));
        res.send({ status: 'OK' });
        
    } catch (error) {
        console.error(colors.red('✗ Error distributing event:'), error);
        res.status(500).send({ error: 'Failed to distribute event' });
    }
});

app.listen(4005, () => {
    console.log(colors.orange(`🚀 Event Bus listening on 4005`));
});