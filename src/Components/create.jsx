import { useState } from "react"
import { ApiUrl } from "../MonkAPI/APIURL"
import axios from "axios"
import { useNavigate } from "react-router-dom"


let Create = ()=>{
    let [ProductName , SetProductName] = useState('')
    let [Price , SetPrice] = useState('')
    let [OldPrice , SetOldPrice] = useState('')
    let [Product , SetProduct] = useState('')
    let [Checked , SetChecked] = useState(false)
    let [TextArea , SetTextArea] = useState('')
    

    let Navigate = useNavigate()

    let PostValue = async ()=>{
        await axios.post(ApiUrl,{
            ProductName,
            Price,
            OldPrice,
            Product,
            Checked,
            TextArea
        })
        Navigate('/Read')
        SetProductName('')
        SetPrice('')
        SetOldPrice('')
        SetProduct('')
        SetTextArea('')
    }


    
    return (
        <form className="formToCreate">
             <h2 style={{textAlign:"center" , marginBottom:'25px'}}>Add Product</h2>

            <label>Product Name</label> 
            <input 
            value={ProductName} 
            type="text"
             placeholder=" Enter Product Name"
             onChange={(e)=>SetProductName(e.target.value )}
             /><br/>

            <label>Old Price</label>

            <input value={Price} 
            type="number" placeholder = "Price "
            onChange={(e)=>SetPrice((e.target.value))}  
            /><br/>

            <label>Price</label>

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
             placeholder="Minimum 30 Words..... "
             onChange={((e)=>SetTextArea(e.target.value))} 
             id="" cols="3" rows="3">
             </textarea>

            <div  style={{marginTop:'10px'}}>
                <input type="checkbox" onChange={()=>SetChecked(!Checked)} value={Checked} />
                <p style={{display: 'inline' , marginLeft:'5px'}}>Please click Here To Verify</p>
            </div>


            <button className="ValueBtn" type="button" onClick={PostValue}>Create</button>
        </form>
    )
}

export default Create