import React from 'react';
import Numeral from "numeral";
import { AiOutlineArrowDown , AiOutlineArrowUp , AiOutlineDash} from "react-icons/ai";

const MovieItem = ({ item , onOver  }) => {
    const { rank , movieNm , salesAmt , audiCnt , rankInten } = item 
    return (
        <tr onMouseOver={ () => onOver( rank ) }>
           <td> {rank} </td> 
           <td> {movieNm} </td> 
           <td> {Numeral(salesAmt).format(0,0)}원 </td> 
           <td> {Numeral(audiCnt).format(0,0)}명</td> 
           <td>
            <i style={{color:'red', fontSize:20}}> { rankInten > 0 && <AiOutlineArrowUp /> } </i>
            <i style={{color:'blue', fontSize:20}}> { rankInten < 0 && <AiOutlineArrowDown /> } </i>
            <i style={{fontSize:20}}> { rankInten === 0 && <AiOutlineDash /> } </i>
           <span style={{marginLeft:10}}>{ rankInten } </span>    
           </td> 
        </tr>
    );
};

export default MovieItem;