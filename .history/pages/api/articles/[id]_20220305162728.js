 import { articles } from "../../../data";
export default function({query:{id}},res){
    
 res.status(200).json(articles)
}