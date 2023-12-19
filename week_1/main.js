function temp(count)
{
    if(count > 0)
    {
        console.log(count);
    }
    else{
        process.exit();
    }
}

let a = 10;
setInterval(function() {
    temp(a - 1);
    a = a - 1;
}, 1000);