console.log(speedlimit(71));

function speedlimit(a){
    let speedlimit = 70;
    if (a<=speedlimit ){
        return 'ok';
    }
    else{
        let points = Math.floor((a - speedlimit)/5);
        if (points >= 12) {
            return 'lisence gone';
        }
        return 'points :'+ points;
    }

}

// function to calculate points when speed exceeds the speed limit and cancil lisence when points exceed the 12 points 