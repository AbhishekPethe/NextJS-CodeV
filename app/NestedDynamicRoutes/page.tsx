import Link from "next/link"


const NestedDynamicRoutes = () => {
    return (
        <div className="flex flex-col gap-10">
            <h1>Product Lists</h1>
            {
                Array.from({ length: 5 }, (each , i) => {
                    return (
                        <Link href={`/NestedDynamicRoutes/${i}`} key={i}>
                            Product no : {i}    
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default NestedDynamicRoutes