import React from 'react';

const Rules = () => {
    return (
        <section className="rules">
            <div className="container">
                <div className="rules__block">
                    <div className="rules__block-content">
                        <h2 className="rules__block-title">Hut rules</h2>
                        <p className="rules__block-text">Check-in:  2:00 PM - 11:00 PM</p>
                        <p className="rules__block-text">Checkout: 11:00 AM</p>
                        <p className="rules__block-text">Not suitable for children and infants</p>
                        <p className="rules__block-text">No smoking</p>
                        <p className="rules__block-text">No pets</p>
                    </div>
                    <div className="rules__block-content">
                        <h2 className="rules__block-title">Cancellation policy</h2>
                        <p className="rules__block-text">
                            Free cancellation until 1:00 PM on Mar 27
                            After that, cancel before 2:00 PM on Apr
                            1 and get a 50% refund, minus the
                            first night and service fee.
                        </p>

                    </div>
                    <div className="rules__block-content">
                        <h2 className="rules__block-title">Important Information</h2>
                        <p className="rules__block-text">You need to hike a steep hill to arrive at the treehouses, it takes approx 20-30 minutes on a trail with stairs and uneven ground.</p>
                        
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Rules;