import PropTypes from "prop-types";

function List() {
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 155 },
        { id: 4, name: "coconut", calories: 139 },
        { id: 5, name: "pineapple", calories: 25 }
    ];

    // fruits.sort((a,b) => a.name.localeCompare(b.name));  //ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name));  //Reverse ALPHABETICAL
    // fruits.sort((a,b) => a.calories - b.calories);  //Numeric
    // fruits.sort((a,b) => b.calories - a.calories);  //Reverse Numeric
    // fruits.sort();

    // All fruits list
    const listItems = fruits.map((fruit) => (
        <li key={fruit.id}>
            {fruit.name}: <b>{fruit.calories}</b>
        </li>
    ));

    // Low calorie fruits (< 100)
    const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);
    const lowCalItems = lowCalFruit.map((fruit) => (
        <li key={fruit.id}>
            {fruit.name}: <b>{fruit.calories}</b>
        </li>
    ));

    // High calorie fruits (> 100)
    const highCalFruit = fruits.filter((fruit) => fruit.calories > 100);
    const highCalItems = highCalFruit.map((fruit) => (
        <li key={fruit.id}>
            {fruit.name}: <b>{fruit.calories}</b>
        </li>
    ));

    return (
        <>
            <h2 className="list-category">All Fruits</h2>
            {fruits.length > 0 ?<ol className="list-items">{listItems}</ol> : null}

            <h2 className="list-category">Low Calorie Fruits (&lt; 100)</h2>
            {fruits.length > 0 ?<ol className="list-items">{lowCalItems}</ol> : null}

            <h2 className="list-category">High Calorie Fruits (&gt; 100)</h2>
            {fruits.length > 0 ?<ol className="list-items">{highCalItems}</ol> : null}
        </>
    );
}

List.propTypes = {
    fruits: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    ).isRequired
};

export default List;
