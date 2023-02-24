import './Form.css'

function Form(){

    return(
        <form id="form">
            <label htmlFor="name">Name</label>
            <br/>
            <input id="name"/>
            <br/>
            <button id="form-btn">Submit</button>
        </form>
    ) 
}

export default Form