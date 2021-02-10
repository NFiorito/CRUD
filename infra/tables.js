class Tables {
    init(connection){
        this.connection = connection;
        this.createProductTable();
    }
    
    createProductTable(){
        const sql = "CREATE TABLE IF NOT EXISTS products (id int NOT NULL AUTO_INCREMENT, nomeDoProduto varchar(50) NOT NULL, preco float NOT NULL, ingredients text NOT NULL, PRIMARY KEY(id))";

        this.connection.query(sql, (error) => {
            if(error) console.error(error);

            else console.log('Tabela criada com sucesso!');
        })
    }
}

module.exports = new Tables;