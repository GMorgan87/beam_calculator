import React, { Component } from 'react'
import FindOrCheck from '../components/FindOrCheck'
import TypeSelect from '../components/TypeSelect'
import Find from '../components/Find'
import Check from '../components/Check'
import '../css/CalculatorContainer.css'

class CalculatorContainer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         find: '',
         check: false,
         type: '',
         span: 0,
         mass: 0,
         defl: 250,
         grade: 355,
         safety: 1,
         XorY: 'x',
         found: false,
         beams: []
      }
    }

    checkSelect = () => this.setState({find:false})
    findSelect = () => this.setState({find:true})

    typeSelect = (e) => {
      this.setState({type:e.target.id})
      fetch(`http://resteel.herokuapp.com/${e.target.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({beams: data})
      })
    }

    inputChange = (e) => {
      if (e.target.name==='XorY'){
        this.setState({[e.target.name]: e.target.value})
      } else {
        this.setState({[e.target.name]: parseInt(e.target.value)})
      }
    }

    findBeam = (e) => {
        e.preventDefault()
        const d = this.state.defl
        const L = this.state.span
        const F = this.state.mass*9.81*this.state.safety
        const G = this.state.grade
        const minI = Math.ceil(((d*F*L**2)/9840000)/10000)
        const minZ = Math.ceil(((5*F*L)/(17*G))/1000)
        console.log('minI :>> ', minI);
        console.log('minZ :>> ', minZ);
        fetch(`http://resteel.herokuapp.com/${this.state.type}/${this.state.XorY}/${minI}/${minZ}`)
        .then(res => res.json())
        .then(data => {

            this.setState({foundBeam:data,
                            found:true})
        })
    }

    componentDidMount(){
        fetch('http://resteel.herokuapp.com/')
            .then(res => res.json)
            .then(data => console.log('ping'))
    }

  render() {
    return (
      <div className='calc-con'>
        {this.state.find===''?
            <FindOrCheck checkSelect={this.checkSelect} findSelect={this.findSelect}/>
            :
            <div></div>
        }
        {this.state.find!==''?
                <TypeSelect typeSelect={this.typeSelect} selected={this.state.type}/>
            :
            <div></div>
        }
        {this.state.type!==""?
            this.state.find?
                <Find inputChange={this.inputChange}  findBeam={this.findBeam} XorY={this.state.XorY} foundBeam={this.state.foundBeam}/>
                :
                <Check inputChange={this.inputChange} beams={this.state.beams}/>
            :
            <div></div>  
        }
      </div>
    )
  }
}

export default CalculatorContainer
