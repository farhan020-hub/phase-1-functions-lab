// Code your solution in this file!


function distanceFromHqInBlocks(distanceBlocks){

    if (distanceBlocks <42){

        return (42 - distanceBlocks);

    } else {
        return (distanceBlocks - 42);

    }
    
   }



function distanceFromHqInFeet(distanceBlocks){

    let distanceFeet = distanceFromHqInBlocks(distanceBlocks);

    return (distanceFeet * 264);
}

function  distanceTravelledInFeet(start, destination){
    if(start > destination){
        return ((start - destination)*264)

    } else if( destination > start ){

        return ((destination -start)* 264);
    }


}

function calculatesFarePrice(start, destination) {

    let travelDist = distanceTravelledInFeet(start,destination);

    if(travelDist <= 400){

        return  0;
    }else if(travelDist > 400 && travelDist <= 2000){

        return ((travelDist -400)*0.02);

    } else if(travelDist > 2000 && travelDist <2500){

        return 25;
    
    } else if(travelDist > 2500){

        return 'cannot travel that far'
    }
    
    
}







