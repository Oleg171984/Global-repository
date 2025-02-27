import React from "react";
import { useDispatch } from "react-redux";
import { clearData } from "../redux/swapiSlice";

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <footer style={{ marginTop: "20px", textAlign: "center" }}>
            <button onClick={() => dispatch(clearData())} style={{ padding: "10px", backgroundColor: "red", border: "none", cursor: "pointer" }}>
                Clear
            </button>
        </footer>
    );
};

export default Footer;
