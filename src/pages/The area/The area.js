import React from 'react';
import Area from "./Area/Area";
import Vesterborg from "./Vesterborg/Vesterborg";
import Activity from "./Activity/Activity";
import Drive from "./Drive/Drive";
import Address from "./Address/Address";
import Nature from "./Nature/Nature";
import Sharm from "./Sharm/Sharm";

const TheArea = () => {
    return (
        <main>
           <Area/>
           <Vesterborg/>
           <Address/>
           <Activity/>
           <Nature/>
           <Drive/>
           <Sharm/>
        </main>
    );
};

export default TheArea;