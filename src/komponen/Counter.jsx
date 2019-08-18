import React from 'react'

class Counter extends React.Component{
    state={
        x1 : 1,
        x2 : 1,
        x3 : 1,
    }
    render(){
        return (
            <div className='mt-3'>
                <div className='row'>
                    <div className="col-4 d-flex justify-content-center">   
                        <input type="button" value="-"  onClick={()=>this.setState({x1:this.state.x1-1})}/>
                        <div className='text-center m-3'>
                            {this.state.x1}
                            <br/>
                            counter 1 
                        </div>
                        <input type="button" value="+" onClick={()=>this.setState({x1:this.state.x1+1})}/>  
                    </div>


                    <div className="col-4 d-flex justify-content-center">
                        <input type="button" value="-"  onClick={()=>this.setState({x2:this.state.x2-1})}/>
                        <div className='text-center m-3'>
                            {this.state.x2}
                            <br/>
                            counter 2 
                        </div>
                        <input type="button" value="+" onClick={()=>this.setState({x2:this.state.x2+1})}/>  
                    </div>

                    <div className="col-4 d-flex justify-content-center">
                        <input type="button" value="-" onClick={()=>this.setState({x3:this.state.x3-1})}/>
                        <div className='text-center m-3'>
                            {this.state.x3}
                            <br/>
                            counter 3 
                        </div>
                        <input type="button" value="+" onClick={()=>this.setState({x3:this.state.x3+1})}/>  
                    </div>
                </div>
                
                <br/>
                
                    <div className="row">
                        <div className="col-6">
                            <input type="button" value="- all" className='btn btn-danger btn-block' onClick={()=>{this.setState({x1:this.state.x1-1,x2:this.state.x2-1,x3:this.state.x3-1})}} />
                        </div>
                        <div className="col-6">
                            <input type="button" value="+ all" className='btn btn-success btn-block' onClick={()=>{this.setState({x1:this.state.x1+1,x2:this.state.x2+1,x3:this.state.x3+1})}}/>
                        </div>
                    </div>



            </div>
        )}

}

export default Counter