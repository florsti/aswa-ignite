// Export our function
module.exports = async function (context, req) {
    // setup our default content type (we always return JSON)
    context.log('returning tasks');
    const tasks = [
     {name: 'Azure', desc: 'eerste'},
     {name: 'Sammy', desc: 'tweede'},
     {name: 'Azury', desc: 'derde'},
     {name: 'Rolfs', desc: 'vierde'}
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
