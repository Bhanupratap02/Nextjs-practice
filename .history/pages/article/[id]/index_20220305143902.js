import { useRouter } from "next/router"

const article = () => {
    const router = useRouter()
    const {id} = router.qe
  return (
    <div>
        This is an article
    </div>
  )
}

export default article 