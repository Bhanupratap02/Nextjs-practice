import { useRouter } from "next/router"

const article = () => {
    // const router = useRouter()
    // const {id} = router.query 
  return (
    <div>
        This is  article {id}
    </div>
  )
}
export const getServerSideProps = async (context) => {
 const res = await  fetch (`https://
 jsonplace
 `)
}
export default article 