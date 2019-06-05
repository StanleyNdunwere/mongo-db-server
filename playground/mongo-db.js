// const MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client)=>{
//     if (err){
//         console.log('cant connect to mongodb server');
//     }else{
//         console.log('connected to Mongo db');
//         const db = client.db('TodoApp');
//         db.collection('Todos').insertOne({
//             name: "stanley",
//             text: "worked well and hahaha"
//         },err=>{
//             if(err){
//                 console.log('unable to insert document');
//             }else{
//                 console.log('added the document successfully');
//             }
//     });
//
//
//     client.close();
// }});
//
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('couldn\'t connnect to db');
    } else {
        console.log('connected successfully');
        const db = client.db('TodoApp');
        db.collection('Users').insertOne({
            name: 'Jothrew Mead',
            age: '25',
            location: 'kansas'
        }, (err, result) => {
            if (err) {
                console.log('failed to insert document');
            } else {
                console.log('document inserted successfully');
                console.log(result.ops[0]._id.getTimestamp());
            }
        });

        async function awaitResult() {
            const docs = await db.collection('Users').find({name: 'Jothrew Mead'}).toArray();
            const jsonDocs = JSON.stringify(docs);
            console.log(jsonDocs);
        }

        async function awaitResultCount() {
            const value = await db.collection('Users').find().count();
            const jsonVal = JSON.stringify(value);
            console.log(jsonVal);
        }

        async function findOneAndDelete() {
            const value = await db.collection('Users').findOneAndDelete({name: "Andrew Mead"});
            console.log(value);
        }

        async function findOneAndUpdate() {
            const value = await db.collection('Users').findOneAndUpdate({name: "Jothrew Mead"},
                {$set: {name: 'Jerrow Tlingaafe'}},
                {returnOriginal: false});
            console.log(value);
        }


        findOneAndUpdate()
        findOneAndDelete()
        // awaitResultCount();
        // awaitResult();


        client.close();
    }
});