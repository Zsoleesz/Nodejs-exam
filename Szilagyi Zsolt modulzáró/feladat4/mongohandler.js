//Feladat 4-5
const { MongoClient, ServerApiVersion } = require('mongodb');
const animals = require('./animals');
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//CREATE
async function addAnimals(animal) {
  try {
      await client.connect();
      const collection = client.db("cluster0").collection("animals");
      console.log("Success connection.");
      let result = await collection.insertOne(animal);
      console.log(result);
      await client.close();
  } catch (e) {
      throw e;
  }
}

addAnimals(animals.list[1]);




//READ
async function read(query = {}, projections = {}) {
  try {
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
      await client.connect();
      const collection = client.db("cluster0").collection("animals");
      let result = await collection.find(query, projections).toArray();
      console.log(result);
      await client.close();
  } catch (e) {
      throw e;
  }
}

  read();
//read({ $and: [{name: 'Chami'}, {type: 'chameleon'}] }, {});
//read({ name: { $regex: '^Chami' } }, {});




//UPDATE
async function update(query = {}, newvalues) {
  try {
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
      await client.connect();
      const collection = client.db("cluster0").collection("animals");
      let result = await collection.updateMany(query, newvalues);
      console.log(result);
      console.log(`${result.modifiedCount} row(s) has been modified.`);
      await client.close();
  } catch (e) {
      throw e;
  }
}

update({ name: 'Chami' }, { $set: { name: 'Chami2' } });




//DELETE
async function remove(query = {}) {
  try {
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
      await client.connect();
      const collection = client.db("cluster0").collection("animals");
      let result = await collection.deleteMany(query);
      console.log(`${result.deletedCount} row(s) has been deleted.`);
      await client.close();
  } catch (e) {
      throw e;
  }
}

remove({name: { $in: ['Chami'] }});
