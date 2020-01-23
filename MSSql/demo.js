const sql = require('mssql')
 
async () => {
    try {
        await sql.connect('mssql://DESKTOP-1HVDQ0J\iorgo@localhost/database');
        const result = await sql.query`select * from Bank.Accounts where id = ${3}`;
        console.dir(result);
    } catch (err) {
        console.log(err);
    }
}