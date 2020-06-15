import React, { useContext } from 'react'
import Context from '../context/context'
const Grid = (props) => {
    const { name } = useContext(Context)
    return (
        <section className="grid-test">
        <div class="row">
            <div className="col-1-2">col-1-2</div>    
            <div className="col-1-2">col-1-2</div>    
        </div>

        <div class="row">
            <div className="col-1-3">col-1-3</div>    
            <div className="col-1-3">col-1-3</div>    
            <div className="col-1-3">col-1-3</div>  
        </div>


        <div class="row">
            <div className="col-1-3">col-1-3</div>    
            <div className="col-2-3">col-2-3</div>    
        </div>


        <div class="row">
            <div className="col-1-4">col-1-4</div>    
            <div className="col-1-4">col-1-4</div>  
            <div className="col-1-4">col-1-4</div>  
            <div className="col-1-4">col-1-4</div>    
        </div>

        <div class="row">
            <div className="col-1-4">col-1-4</div>    
            <div className="col-1-4">col-1-4</div>  
            <div className="col-2-4">col-2-4< /div>  
        </div>

        <div class="row">
            <div className="col-1-4">col-1-4</div>    
            <div className="col-3-4">col-3-4</div>  
        </div>
        </section>
        
    )
}
export default Grid
