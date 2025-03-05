function Clock(){
    let time=new Date();
    return(
        <>
        <center>
        <div>
        <h1 className="fw-bolder">Bharat Clock</h1>
        </div>
        <div >
        <h3>This is the clock that shows the timer in Bharat at all times</h3>
        </div>
        <div>
            <h3>This is the current time: {time.toLocaleDateString()}-{""}{time.toLocaleTimeString()}</h3>
        </div>
        </center>
        </>
    );
}
export default Clock;