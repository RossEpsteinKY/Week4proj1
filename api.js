const {MongoClient} = require('mongodb');
const client = new MongoClient(uri);
const mongoose = require("mongoose");

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
    //  */
    // const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
    //
    //
    // const client = new MongoClient(uri);
    //
    // try {
    //     // Connect to the MongoDB cluster
    //     await client.connect();
    //
    //     // Make the appropriate DB calls
    //     await  listDatabases(client);
    //
    // } catch (e) {
    //     console.error(e);
    // } finally {
    //     await client.close();
    // }

    mongoose.connect(process.env.db_url, (err) =>{
        if(err){
            console.error('error!',err.message);
        }
        else{
            console.log('mongo db connected!');
        }
    })
}



main().catch(console.error);
