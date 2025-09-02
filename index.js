import {createServer} from 'http';

const person = {
    name: 'John Doe',
    age: 33,
    city: 'New York'
};

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(person));
});


server.listen(1234, () => {
    console.log('Server running at http://localhost:1234/');
});