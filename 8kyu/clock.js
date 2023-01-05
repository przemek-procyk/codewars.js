function past(h, m, s){
    let milisecond = 0;
    if (h >= 0 && h <=23){
        milisecond += ((h * 60) * 60 ) * 1000
    };
    if (m >= 0 && m <=59){
        milisecond += (m * 60) * 1000
    }; 
    if (s >= 0 && s <= 59){
        milisecond += s * 1000
    };
    return milisecond
};

console.log(past(1,0,0))