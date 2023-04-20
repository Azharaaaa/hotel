import React from 'react';
import Begin from "./Begin/Begin";
import Cabins from "./Cabins/Cabins";
import Photo from "./Photo/Photo";
import Map from "./Map/Map";
import Facilities from "./Facilities/Facilities";
import More from "./More/More";
import Stay from "./Stay/Stay";

const Home = () => {
    return (
        <main>
            <Begin/>
            <Cabins/>
            <Photo/>
            <Map/>
            <Facilities/>
            <More/>
            <Stay/>

        </main>
    );
};

export default Home;