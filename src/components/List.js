import React from "react";

const List = () => {
    return (
        <div>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <div>{item}</div>
            ))}
        </div>
    );
};

export default List;
