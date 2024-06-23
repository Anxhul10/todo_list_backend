const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.json());
var data = [];
var id = 0;

// return all todos
function getTodo(req, res){
    let sizeData = data.length;
    if(sizeData == 0){
        res.status(200).send("data is empty!!")
    }
    else{
        res.send(data);
    }
}
function addTodo(req, res){
    let temp_data = req.body;
    // loop to check any data format is ok or not
    let check = 0;
    let size = Object.keys(temp_data).length;
    var ideal_keys = ['title', 'completed', 'description'];

    // deals when data entered is {}
    if(size === 0){
        res.status(200).send("entered data is empty");
    }
    for(let word of ideal_keys){
        if(word in temp_data){
            check = 1;
            break;
        }
    }
    // deals if none keyword is entered
    if (check === 0){
        res.send(`enter data in following format:-
                {
                    "title":_____,
                    "completed":______,
                    "description":________,
                }
                    `)
    }
    else{
        // give unique id
        temp_data["id"] = id++;
        data.push(temp_data);
        res.send("data is added");

    }

    // Todo -> give them unique id
}
// getting single todo
function getSingleTodo(req, res){
    let id_temp = req.params.n;
    let ans = data[id_temp];
    res.send(ans);
}
// setting update
function updateTodo(req , res){
    let new_obj = req.body;
    let id_temp = parseInt(req.params.n);
    // adding id to new updated obj
    new_obj["id"] = id_temp;
    data[id_temp] = new_obj;

    res.send("updated successfully");

}
// delete todo
function deleteTodo(req, res){
    let temp_id = req.params.n;
    let deleted = delete data[temp_id];
    // to replacing the deleted index
    for(let i = temp_id ; i <data.length-1; i++){
        data[i] = data[i+1]
        data[i]["id"] = i;
    }
    // delete last element
    let lst_dlt  = delete data[data.length-1];
    res.send("element deleted successfully");
}
// setting up handlers
app.get('/todos/', getTodo);
app.get('/todos/:n', getSingleTodo);
app.post('/todos', addTodo);
app.put('/todos/:n', updateTodo)
app.delete('/todos/:n', deleteTodo);

function started(){
    console.log(`localhost:3000/todos has started ${port}`)
}
app.listen(port, started);