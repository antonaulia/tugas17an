import React from 'react'

class Submit extends React.Component{
    state={
        listnama : ['seto','andi','budi'],
        listkerja :['coder','CEO','Manager'],
        listtgllahir:['123456','654321','123456'],
    }
    
    showdata=()=>{
        var hasil = this.state.listnama.map((val,idx)=>{
            return(
               <div></div>
            )
        })
        return hasil
    }

    render(){
        return(
            <h1>hello world !</h1>
        )
    }
}

export default Submit