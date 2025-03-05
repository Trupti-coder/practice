function Array(){
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    return(
        <>
         <div>
      <h3>Fruit List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
        </>
    );
}
export default Array;