const base64 = require('node-base64-image')
const path = "Helper/test.png"
const options = {
    local: true,
    string: true
};
//hello
function getBase64 (path){
    let prom = new Promise(resolve => { 
        base64.encode(path, options, (err, img) => {
            if(err) { resolve({code:1, data:err}); }
            resolve( {code:0, data:`data:image\\/png;base64,${img}`});
        });
    })

    return prom;
}

async function test(){
    let result = await getBase64(path);
    console.log(result);
    return result;
}


