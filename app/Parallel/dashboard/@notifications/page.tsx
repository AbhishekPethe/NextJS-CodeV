import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const Notifications = () => {
  return (
      <Card>
          <p>
          Notifications
          </p>
          <Link href="/Parallel/dashboard/archived" className='underline underline-offset-1'>
              Archived Noti..
          </Link>
    </Card>
  )
}

export default Notifications