 import { articles } from "../../../data";
export default function({query:{id}},res){
    
const filtered = articles.filter(article => article.id === id)
if(filtered.length > 0){
 res.status(200).json
}
  
}