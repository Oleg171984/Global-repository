import { useSelector } from "react-redux";

const Footer = () => {
    const todoCount = useSelector((state) => state.todos.todos.length);
    return <footer className="footer">Всього: {todoCount}</footer>;
};

export default Footer;

