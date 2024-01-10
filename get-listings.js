import listings from "./listings.json" assert {type: "json"};
//return only the first 5 results
const RESULT_LIMIT = 5;

export default function getListings(city, bedrooms, bathrooms, amenities){
    return listings.filter(listing => {
        // const cityMatch = city 
        // ? listing.city.toLowerCase() === city.toLowerCase() 
        // : true;
        // const bedroomsMatch = bedrooms
        // ? listing.bedrooms === bedrooms
        // : true;
        // const bathroomsMatch = bathrooms
        // ? listing.bathrooms === bathrooms
        // : true;
        let cityMatch, bathroomsMatch, bedroomsMatch;
        if (city){
            cityMatch = listing.city.toLowerCase() === city.toLowerCase();
        } else {
            cityMatch = true;
        }
        
        if (bathrooms){
            bathroomsMatch = listing.bathrooms === bathrooms;
        } else {
            bathroomsMatch = true;
        }

        if (bedrooms){
            bedroomsMatch = listing.bedrooms === bedrooms;
        } else {
            bedroomsMatch = true;
        }

        const amenitiesMatch = amenities && amenities.length
        ? amenities.every(amenity => listing.amenities.includes(amenity))
        : true;

        return cityMatch && bedroomsMatch && bathroomsMatch && amenitiesMatch;
    }).slice(0, RESULT_LIMIT);
}