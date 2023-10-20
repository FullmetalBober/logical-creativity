import React from "react";
// @ts-ignore
import { List } from "react-virtualized";

const list = [
    "Option 1",
];

for (let i = 1; i <= 100; i++)
    list.push("Option " + i.toString());

// @ts-ignore
function rowRenderer({key, index, isScrolling, isVisible, style,}) {
    return (
        <div key={key} style={style}>
            {list[index]}
        </div>
    );
}


const ListExample = () => {
    return (
        <List
            width={1900}
            height={300}
            rowCount={list.length}
            rowHeight={20}
            rowRenderer={rowRenderer}
        />
    );
};

export default ListExample;