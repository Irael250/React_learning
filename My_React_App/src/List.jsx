 function List(){

    const fruits = ["Apple","Orange","banana","coconut","pineapple"];
    const listItems= fruits.map(fruit => <li>{fruit}</li>  )
    return( <ul>{listItems}</ul> );

 }

 export default List