const customExpress = require('./config/customExpress');
const connection = require('./infra/connection');
const Tables = require('./infra/tables');

connection.connect(error => {
    console.log('Trying to connect to the database...');
    if(error) console.error(error);
    else{
        console.log('Connected!');

        Tables.init(connection);

        const app = customExpress();

        app.listen(3000, () => {
            console.log('The server is running on port 3000');
        })
    }
})