import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './background.scss'

export default class Background extends Component {
     getRandom(max) {
        return Math.floor(Math.random() * max + 1)
    }
    classe() {
        const nomes = ['moveX', 'moveXOpposite', 'moveY', 'moveYOpposite','moveXY','moveXYopposite'];
        const name = nomes[Math.ceil(Math.random() * (nomes.length - 1))];
        const classColor = ['color1', 'color2', 'color3', 'color4','color5','color6'];
        const color = classColor[Math.ceil(Math.random() * (nomes.length - 1))];
        return name + " " + color
    }
    numbers(numb,numbLength) {
      var cont = 0;
      const numbers = [0]
      for(let i =0; i<numbLength; i++){
     
        cont = cont + 1
        numbers.push(cont )
        console.log(cont)
      }
      console.log("dentro de numbers" + numbers)
      return numbers
    
    }

     NumberList() {
    const numbers = [0] 
    function pushNumbers (){ 
      var cont = 0;
     for(let i =0; i<100; i++){
     cont = cont + 1
    numbers.push(cont )
      }
      }
      pushNumbers()
     
    const element = <FontAwesomeIcon icon={faHeart} className="iconheart" />
       const listItems = numbers.map((number) =>
          <li   key={number.toString()}
          
          value={number} className={"heartX " + (this.classe())}
          style={{ marginLeft: (this.getRandom(105)-5) + "vw" ,marginTop: (this.getRandom(900)-200) + "px"}}>
             {element}
              </li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }
    
    render() {
        return(
            <div className="size">
              {/* {this.numbers()} */}
               <div className="listX">{this.NumberList()} 1</div>
            </div>
        )
    }
}