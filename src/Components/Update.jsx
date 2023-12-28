
import axios from "axios"
import { useState ,useEffect } from "react"
import { ApiUrl } from "../MonkAPI/APIURL"
import { useNavigate } from "react-router-dom"

let Update = ()=>{

    let Navigate = useNavigate()

    let [ProductName , SetProductName] = useState('')
    let [Price , SetPrice] = useState('')
    let [OldPrice , SetOldPrice] = useState('')
    let [Product , SetProduct] = useState('')
    let [Checked , SetChecked] = useState()
    console.log(Checked);
    let [TextArea , SetTextArea] = useState('')
    console.log(Checked);
    let [Id , SetId] = useState()

    useEffect(()=>{
          SetProductName(localStorage.getItem('ProductName'));
           SetPrice(localStorage.getItem('Price'));
           SetId(localStorage.getItem('id'));
           SetOldPrice (localStorage.getItem('OldPrice'));
          SetProduct(localStorage.getItem('Product'));
          SetChecked(localStorage.getItem('Checked'));
          SetTextArea(localStorage.getItem('TextArea'));
    },[])

    let UpdateValue = async (id)=>{
        await axios.put(`${ApiUrl}/${id}`,{
            ProductName,
            Price,
            OldPrice,
            Product,
            Checked,
            TextArea
        })
        Navigate('/Read')
    }
    
   
    return (
             <form className="formToCreate">
                <h2 style={{textAlign:"center", marginBottom:'25px'}} >Edit Item</h2>
            <label>ProductName</label> 
            <input 
            value={ProductName} 
            type="text"
             placeholder="ProductName"
             onChange={(e)=>SetProductName(e.target.value)}
             /><br/>

            <label>Price</label>

            <input value={Price} 
            type="number" placeholder = "Price"
            onChange={(e)=>SetPrice(e.target.value)}
            /><br/>

             <label>OldPrice</label>

            <input value={OldPrice} 
            type="number" placeholder = "OldPrice"
            onChange={(e)=>SetOldPrice(e.target.value)}
            /><br/>

            <select style={{marginBottom:'25px', padding:'5px 5px'}} onChange={(e)=>SetProduct(e.target.value)}>
                    <option>Select Category </option>
                    <option> Vegetables </option>
                    <option> Fruits & Nuts </option>
                    <option> Dairy & creams </option>
                    <option> Packages Food </option>
                    <option> Staples </option>
            </select>

            <textarea
             value={TextArea}
             placeholder="Maximum 20 Words..... "
             onChange={((e)=>SetTextArea(e.target.value))} 
             id="" cols="3" rows="3">
             </textarea>
            <div style={{marginTop:'10px'}}>
                <input style={{paddingTop:'20px'}} type="checkbox" onChange={(e)=>SetChecked(e.target.checked)} value={Checked} />
                <p style={{display: 'inline' ,marginLeft:'8px'}}>Please click Here To Verify</p>
            </div>
            <button className="ValueBtn" type="button" onClick={()=> UpdateValue(Id)}>Update</button>
        </form>
       
    )
}
export default Update