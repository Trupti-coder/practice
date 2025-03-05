import Cookies from "js-cookie"
function Cookie(){
    function funCreate(){
        Cookies.set("color","red",{expires:2});
        alert("cookie created");
    }

    function funRemove(){
        Cookies.remove("color");
        alert("cokkie removed");

    }
    function funRead(){
        var cookieName="color";
        var str=Cookies.get(cookieName);
        console.log(str);
        }
    return(
        <>
        <h3>Cookie demo</h3>
        <input type="button" value="Crate Cookie" onClick={funCreate}></input>
        <input type="button" value="Remove Cookie" onClick={funRemove}></input>
        <input type="button" value="Read Cookie" onClick={funRead}></input>
        </>
    );
}
export default Cookie;