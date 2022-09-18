// const {Temp : mainCls} = require('../components/Temp')
import Temp from '../components/Temp.jsx'



const movies = [
    { name : 'avengers 4', rating : 4.5 ,revenue : '1000cr', type : "action", M_id : "Mv1" },
    { name : 'avengers 5', rating : 4.7 ,revenue : '1500cr', type : "action MCU PH-6", M_id : "Mv2"},
    { name : 'avengers 6', rating : 4.9 ,revenue : '1600cr', type : "action MCU PH-6", M_id : "Mv3"},
    { name : 'OPM S03', rating : 4.9 ,revenue : '200cr', type : "hero", M_id : "Mv4"},
    { name : 'Stranger Things S5', rating : 5 ,revenue : '500cr', type : "Everything", M_id : "Mv5"},
    { name : 'Loki S2', rating : 5 ,revenue : '3000cr', type : "SCI FI", M_id : "Mv6"},
]

const add_mv = Temp.export_data;

export function add_new_mv(){
    return movies.push(add_mv);
}

export function getMovies() {
    return movies;
}


