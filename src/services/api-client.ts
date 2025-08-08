import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9d3f1c5291e44a65b079c70a054bd6de'
    }
})