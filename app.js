/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Jenkins Pipeline!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Exporting app for unit testing*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Jenkins Pipeline!');
});

// Export the app for testing
if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app; // Exporting app for testing

