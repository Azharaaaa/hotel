import React from 'react';
import Hut from "./Hut/Hut";
import Outside from "./Outside/Outside";
import Food from "./Food/Food";
import Inside from "./Inside/Inside";

const TheHut = () => {
    return (
        <main>
            <Hut/>
            <Outside/>
            <Inside/>
            <Food/>
        </main>
    );
};

export default TheHut;