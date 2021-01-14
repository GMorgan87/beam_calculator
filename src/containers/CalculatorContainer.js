import React, { Component } from 'react'
import FindOrCheck from '../components/FindOrCheck'
import TypeSelect from '../components/TypeSelect'
import FindInput from '../components/FindInput'
import CheckInput from '../components/CheckInput'
import '../css/CalculatorContainer.css'
import Results from '../components/Results'


class CalculatorContainer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        showSelect: false,
         find: '',
         check: false,
         type: '',
         span: 0,
         load: 0,
         defl: 250,
         grade: 355,
         safety: 1,
         XorY: 'x',
         fixSim: "s",
         evenPoint: "p",
         stressMod: {
          "f": {
            "e": 12,
            "p": 8
          },
          "s": {
           "e": 8,
           "p": 4
         },
        },
         deflMod: {
           "f": {
             "e": 384,
             "p": 192
           },
           "s": {
            "e": 78.6,
            "p": 48
            }
          },
         found: false,
         beams: [],
         selectedBeam: {},
         calcObject: {}
      }
    }
    

    checkSelect = () => this.setState({find:false, showSelect: true})
    findSelect = () => this.setState({find:true, showSelect: true})

    typeSelect = (e) => {
      this.setState({type:e.target.id})
      fetch(`https://resteel.herokuapp.com/${e.target.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({beams: data})
      })
    }

    inputChange = (e) => {
      if (e.target.name==='XorY' || e.target.name==='fixSim' || e.target.name==='evenPoint'){
        this.setState({[e.target.name]: e.target.value})
      } else if (e.target.name==='safety' || e.target.name==='modifier') {
        this.setState({[e.target.name]: parseFloat(e.target.value)})
      } else {
        this.setState({[e.target.name]: parseInt(e.target.value)})
      }
    }

    beamSelectChange = (e) => {
      let beam = this.state.beams[e.target.value]
      beam.i = this.getBeamI(beam)
      beam.z = this.getBeamZ(beam)
      this.setState({selectedBeam: beam})
    }

  fetchBeams = (minI, minZ) => {
    fetch(`https://resteel.herokuapp.com/${this.state.type}/${this.state.XorY}/${minI}/${minZ}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
          data.i = this.getBeamI(data)
          data.z = this.getBeamZ(data)
          this.setState({beam:data,
                          found:true})
          this.getCalcs();
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }


   findBeam = (e) => {
        e.preventDefault()
        // this.setState({showSelect: false})
        const d = this.state.defl
        const L = this.state.span
        const F = this.state.load*this.state.safety
        const deflMod = this.state.deflMod[this.state.fixSim][this.state.evenPoint]
        const stressMod = this.state.stressMod[this.state.fixSim][this.state.evenPoint]
        const G = this.state.grade
        const minI = Math.ceil(((d*F*L**2)/(205000*deflMod))/10000)
        const minZ = Math.ceil(((20*F*L)/(17*G*stressMod))/1000)
        this.fetchBeams(minI, minZ)
    }

    checkBeam = (e) => {
      e.preventDefault()
      // this.setState({showSelect: false})
      this.setState({beam: this.state.selectedBeam},
        () => {
          this.getCalcs()
        })
    }

    getBeamWeight = () => this.state.beam.mass * this.state.span

    getCalcs = () => {
      // const beamWeight = (this.state.span/1000)*this.state.beam.mass
      const force = Math.ceil(this.state.load * this.state.safety)
      const stressMod = this.state.stressMod[this.state.fixSim][this.state.evenPoint]
      const deflMod = this.state.deflMod[this.state.fixSim][this.state.evenPoint]
      // const force = this.state.mass * 9.81 * this.state.safety
      let results = {
        span: this.state.span,
        mass: this.state.mass,
        force: force,
        load: this.state.load,
        safety: this.state.safety,
        defl: this.state.defl,
        grade: this.state.grade,
        // beamWeight: beamWeight,
        stress: ((force*this.state.span)/(stressMod*this.state.beam.z*1000)).toFixed(2),
        deflection: ((force*this.state.span**3)/(deflMod*205000*this.state.beam.i*10000)).toFixed(2)
      }
        this.setState({calcObject:results})
    }

    getBeamI = (beam) => {
      if (this.state.XorY === 'x') {
        return beam.ixx
      } else {
        return beam.iyy
      }
    }

    getBeamZ = (beam) => {
      if (this.state.XorY === 'x') {
        return beam.zxx
      } else {
        return beam.zyy
      }
    }
    
    componentDidMount(){
        fetch('https://resteel.herokuapp.com/')
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
        {this.state.showSelect?
                <TypeSelect typeSelect={this.typeSelect} selected={this.state.type}/>
            :
            <div></div>
        }
        {this.state.type!==""?
            this.state.find?
                <FindInput inputChange={this.inputChange}
                findBeam={this.findBeam}
                XorY={this.state.XorY}
                fixSim={this.state.fixSim}
                evenPoint={this.state.evenPoint}
                beam={this.state.beam}
                calcObject={this.state.calcObject}/>
                :
                <CheckInput inputChange={this.inputChange}
                checkBeam={this.checkBeam}
                XorY={this.state.XorY}
                fixSim={this.state.fixSim}
                evenPoint={this.state.evenPoint}
                beams={this.state.beams}
                beamSelectChange={this.beamSelectChange}
                beam={this.state.beam}
                calcObject={this.state.calcObject}/>
            :
            <div></div>  
        }
        {this.state.beam?
          <Results beam={this.state.beam}
          calcObject={this.state.calcObject}
          stressMod={this.state.stressMod[this.state.fixSim][this.state.evenPoint]}
          deflMod={this.state.deflMod[this.state.fixSim][this.state.evenPoint]}/>
          :
          <div></div>
        }
      </div>
    )
  }
}

export default CalculatorContainer
