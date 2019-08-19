import React from 'react'

class Submit extends React.Component {
    state = {
        listnama: [
            'seto', 'andi', 'budi'
        ],
        listkerja: [
            'coder', 'CEO', 'Manager'
        ],
        listtgllahir: ['123456', '654321', '123456'],
        addnama :'',
        addjob : '',
        adddob : '',
    }

    pushdata=()=>{
        var newlistnama = this.state.listnama
        var newlistkerja = this.state.listkerja
        var newlisttgllahir = this.state.listtgllahir
        newlistnama.push(this.state.addnama)
        newlistkerja.push(this.state.addjob)
        newlisttgllahir.push(this.state.adddob)
        this.setState({listnama : newlistnama})
        this.setState({listkerja : newlistkerja})
        this.setState({listtgllahir : newlisttgllahir})
    }

    showdata = () => {
        var {listnama,listkerja,listtgllahir} = this.state
        var showarr=[]
        for(var i=0;i<listnama.length;i++){
            showarr[i]=[listnama[i],listkerja[i],listtgllahir[i]]
        }
        var hasil = showarr.map((val, idx) => {
                return (
                                <td className='col-4'>
                                nama {val[0]} <br/>
                                kerjaan {val[1]} <br/>
                                tgl lahir {val[2]} <br/>
                                </td>
                )
            })
        return hasil
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className="row mt-2 justify-content-center">
                    <div className="col-3">
                        <input type="text" ref='innama' onChange={()=>this.setState({addnama : this.refs.innama.value})} placeholder="nama" className='form-control' name="" id=""/>
                    </div>
                    <div className="col-3">
                        <input type="button" onClick={()=>this.pushdata()} className='btn btn-block btn-primary' value="Submit"/>
                    </div>
                </div>
        
                <div className="row mt-2 justify-content-center">
                    <div className="col-6">
                        <input type="text" ref='injob' onChange={()=>this.setState({addjob : this.refs.injob.value})} placeholder='job' className='form-control' name="" id=""/>
                    </div>
                </div>

                <div className="row mt-2 justify-content-center">
                    <div className="col-6">
                        <input type="text" ref='indob' onChange={()=>this.setState({adddob : this.refs.indob.value})} placeholder='tgl lahir' name="" className='form-control' id=""/>
                    </div>
                </div>
                <div className='container mt-5'>
                        <table className='table table-bordered'>
                            <tr className='row'>
                                {this.showdata()}
                            </tr>
                        </table>
                    </div>
            </div>
        )
    }
}

export default Submit