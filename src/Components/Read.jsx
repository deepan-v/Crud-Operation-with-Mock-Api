import { useEffect, useState } from "react"
import { ApiUrl } from "../MonkAPI/APIURL"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


let Read = ()=>{

    let Navigate = useNavigate()

    let [ApiItems ,SetApiItems]= useState([])
    // console.log(ApiItems);
    
    let DeleItems = async (id)=>{
        await axios.delete(`${ApiUrl}/${id}`)
        FetData()
    }
    let FetData = async ()=>{
       let DataItems =  await axios.get(ApiUrl)
       SetApiItems(DataItems.data)
    }


    let UpdataItem = ({ProductName , Price, TextArea , OldPrice , Product , id , Checked})=>{
            localStorage.setItem('ProductName', ProductName);
            localStorage.setItem('OldPrice',OldPrice);
            localStorage.setItem('Price',Price);
            localStorage.setItem('id',id);
            console.log(!Checked);
            localStorage.setItem('Product',Product);
            localStorage.setItem('Checked', Checked);
            localStorage.setItem('TextArea', TextArea);
            Navigate('/update')
    }

    useEffect(()=>{
         FetData()
    },[])

    
    
    if(Object.keys(ApiItems).length===0){
        return <h3 style={{textAlign:'center' , marginTop:'20px'}}><Link to='/'>Go To An Create Page Add Items To List</Link></h3>
    }
    
    return (
       <div>
        <h2 style={{textAlign:'center'}}><Link to='/'>Back To Add Items</Link></h2>
                <table border='2px'className="table">
                <thead>
                    <tr>
                        <th scope="col" >ProductName</th>
                        <th scope="col">Price</th>
                        <th scope="col" >OldPrice</th>
                        <th scope="col" >category</th>
                        <th scope="col" >Checked</th>
                        <th scope="col" >TextArea</th>
                        <th scope="col" >Delete</th>
                        <th scope="col" >Edit</th>
                    </tr>
                </thead>    
                <tbody>
                    {ApiItems.map((datas)=>{
                        return(
                    <tr key={datas.id}>
                        <td > {datas.ProductName ==='' ? 'Empty': datas.ProductName}</td>
                        <td>{datas.Price ==='' ? <p>$0</p>:<p>${datas.Price}</p>}</td>
                        <td>{datas.OldPrice === '' ? <p>$0</p>:<p>${datas.OldPrice}</p>}  </td>
                        {/* {console.log(datas.OldPrice)} */}
                        <td> {datas.Product === '' ? 'No Items' : datas.Product }</td>
                        <td> {datas.Checked ? 'Active':'Not Active'}</td>
                        <td> {datas.TextArea ===''? 'No description' : datas.TextArea }</td>
                        <td> <button className="DeleteBtn" onClick={()=>DeleItems(datas.id)}>Delete</button></td> 
                        <td> <button className="UpdateBtn" onClick={()=>UpdataItem(datas)}>Edit</button></td> 
                    </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Read