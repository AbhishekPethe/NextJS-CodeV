import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const ArchivedPage = () => {
  return (
      <Card>
          <p>
          ArchivedPage
          </p>
          <Link href={"/Parallel/dashboard"} >Default</Link>
      </Card>
  )
}

export default ArchivedPage