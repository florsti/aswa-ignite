// Export our function
module.exports = async function (context, req) {
    // setup our default content type (we always return JSON)
    context.log('returning tasks');
    const tasks = [
     {name: 'Azure'},
     {name: 'Sammy'},
     {name: 'Azury'},
     {name: 'Rolfs'},
    ]
    context.res = {
        body: {
            tasks: tasks
        },
        header: {
            "Content-Type": "application/json"
        }    
    }
};
