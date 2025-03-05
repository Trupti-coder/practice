import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Table } from "react-bootstrap";

function Category(){
    let[category,setCategory]=useState([]);
    async function getCategory(){
        var response=await fetch('https://dummyjson.com/products/category-list');
        var result= await response.json();
        setCategory(result);
    }

    useEffect(()=>{
        getCategory();
    })

    let[list,setlist]=useState([]);
    async function funDisplay(category_list){
        var response=await fetch('https://dummyjson.com/products/category/'+category_list);
        var result=await response.json();
        setlist(result.products)

    }
    useEffect(()=>{
        funDisplay();
    },[]);

    function funSelect(event){
        let txt=event.currentTarget.value;
        console.log(txt);
        funDisplay(txt);
    }

    let imgStyle={"width":"200px","height":"200px"}

    let[RowData,setRowData]=useState(); 
    
    function rowClick(obj){
        setRowData(obj);
        console.log(RowData);
    
    }
    return(
        <>
        <h3>Select category</h3>
        <select onClick={funSelect}>
            <option>Select</option>
            {
                category.map((x)=>{
                    return<option>{x}</option>

                })
            }

    

        </select>
        <div>
                <table border="2">
                    <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Img</th>
                    </tr>
                
                {
                    list.map((x)=>{
                        return<tr onClick={()=>{rowClick(x)}}>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.price}</td>
                            <td><img src={x.thumbnail} style={imgStyle}></img></td>
                        </tr>
                        
                        

                    })
                }
                </table>
            </div>

        </>
    );
}
export default Category;