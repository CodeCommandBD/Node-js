// ############# asynce ###########
// writeFile  ===> replace 
// appendFile ===> add
// readFile 
// rename
// unlink  ====> delete
// exists  ====> have or not


// ############ syne ##############
// writeFileSync
// appendFileSync
// readFileSync
// renameSync
// unlinkSync
// existsSync

const fs = require('fs');

// console.log(fs);

fs.exists( 'demo-2.txt', (res) => {
    if(res){
        console.log('found');
        
    }else{
        console.log('not-found');
        
    }
})
