 import { articles } from "../../../data";
export default function({query},res){
    
 res.status(200).json(articles)
}