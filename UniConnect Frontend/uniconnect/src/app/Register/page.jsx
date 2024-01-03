import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <div>
      Register
      <Link href = "/LoginPage">Login</Link>
      <Link href = "/Posts">Posts</Link>
    </div>
  )
}

export default Register