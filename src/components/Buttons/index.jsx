import "./styles.css";

export const CustomButton = ({children, color, action}) => {
    return (
        <button className="custom-button" style={{color: `${color}`, border: `2px solid ${color}`}} onClick={action}>{children}</button>
    );
}
