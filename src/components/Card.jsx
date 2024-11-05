const Card = ({gadget}) => {
    const {title, image} = gadget
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default Card;