import React from 'react'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div>
        Login Page
      <Link href="/Posts">Posts</Link>
      <Link href="/Register">Register</Link>
    </div>
  )
}

export default LoginPage
