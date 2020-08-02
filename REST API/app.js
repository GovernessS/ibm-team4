
const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
//const CONNECTION_URL = "mongodb+srv://tpennoh:cUVw7Rb1Kyo0yecV@cluster0.vurao.mongodb.net/testdb?retryWrites=true&w=majority";
const CONNECTION_URL = "mongodb+srv://blackHelp2:6vCRbkpc1YA4UYln@cluster0.swa4q.mongodb.net/BlackHelp?retryWrites=true&w=majority";
const DATABASE_NAME = "BlackHelp";
//const DATABASE_NAME = "testdb";

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

/**POST*/
app.post("/Resources", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});


/**GET*/
app.get("/Resources", (request, response) => {
    if(Object.entries(request.query).length === 0){
        collection.find({}).toArray((error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    }
    else{
        collection.find(
            {"specialty_1":request.query["specialty"]
            }).toArray((error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result);
        });
    }
});

// /**GET:ID*/
// app.get("/Resources/:id", (request, response) => {
//     collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
//         if(error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
//     });
// });


app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("Resources");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});
