import React, {useEffect, useContext} from 'react';
import ChooseItem from "./ChooseItem";
import {CustomContext} from "../../../utils/context/Context";
import ChooseForm from "./ChooseForm";


const Choose = () => {

    const {getAllMenu, menu} = useContext(CustomContext)


    useEffect(()=>{
        getAllMenu()
    },[]);



    return (
        <section className="choose">
            <div className="container">
                <div className="choose__row">
                    {
                        menu.map((item) => (
                           <ChooseItem item={item} />
                        ))
                    }
                    <ChooseForm/>
                </div>
            </div>
        </section>


    );
};

export default Choose;