
import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";

const Detail = () => {
    const navigate = useNavigate();
    //UseLocation to get Data from Homepage
    const location = useLocation();
    const {state} = location;

    return (
        <>
        <div>

            <label>{state.title}</label>
            <input
                type="text"
                id="body"
                name="body"
                value={state.body}
                // onChange={handleChange}
                disabled={true}
                autoComplete="off"
            />

            <button onClick={() => {navigate('/')}}>Back</button>

        </div>
        </>
    );
};

export default Detail;