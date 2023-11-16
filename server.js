const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 8080


app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true}));
app.use(cors())

const userData = []; // In-memory storage
const userDataTalento = []; // In-memory storage
const projectData = []; // In-memory storage
const meetingData = []




app.get('/', (req, res) => {
    res.send('Server Running')
    // Send a response to the client
    res.json({ message: 'Registration successful' });
})

//API for the HUNTER signup
app.post('/signupCazador', (req, res) => {
    const formData = req.body;
    console.log("Received request: ", formData);
    res.json({ message: 'Server received the POST request' });
    userData.push(formData);

    //console.log(formData.name);
})

app.get('/getUserDataCazador', (req, res) => {
    // Send the user data stored on the server as a response
    res.json(userData);
});



//API for the TALENT signup
app.post('/signuptalento', (req, res) => {
    const formDataTalento = req.body;
    console.log("Received request: ", formDataTalento);
    res.json({ message: 'Server received the POST request' });
    userDataTalento.push(formDataTalento);
})

app.get('/getUserDataTalento', (req, res) => {
    // Send the user data stored on the server as a response
    res.json(userDataTalento);
});


//API for the PROJECT SUBMISSION
app.post('/submitProject', (req, res) => {
    const formDataProject = req.body;
    console.log("Received request: ", formDataProject);
    res.json({ message: 'Server received the POST request' });
    projectData.push(formDataProject);
})

app.get('/getProjectData', (req, res) => {
    // Send the user data stored on the server as a response
    res.json(projectData);
});


app.post('/roomMeeting', (req, res) => {
    const userData = req.body;
    console.log("Received request: ", userData);
    res.json({ message: 'Server received the POST request' });
    meetingData.push(userData);
})

app.get('/getRoomData', (req, res) => {
    // Send the user data stored on the server as a response
    res.json(projectData);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})