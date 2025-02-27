import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData } from "../redux/swapiSlice";

const SwapiList = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.swapi);

    useEffect(() => {
        dispatch(fetchSwapiData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map((char, index) => (
                <li key={index}>{char.name}</li>
            ))}
        </ul>
    );
};

export default SwapiList;
