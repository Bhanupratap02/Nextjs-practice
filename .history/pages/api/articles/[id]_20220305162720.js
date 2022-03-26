 import { articles } from "../../../data";
export default function({},res){
    
 res.status(200).json(articles)
}