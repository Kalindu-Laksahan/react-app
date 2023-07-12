const address = {
    street: 'EE',
    city: 'RR',
    zipCode: '22',
    country:'SL'
};
    
    for(let key in address){
        console.log(key, address[key]);
    }

    //normal way
    const Steets = address.street;
    const citys = address.city;
    const zipCodes = address.zipCode;

    //object destructuring. it's easier than normal way
    const {street, city, zipCode, country} = address;

    //set different name
    const {street:RoadName, city:Town, zipCode:Zip, country:Region} = address;

    console.log(RoadName, Town, Zip, Region);



