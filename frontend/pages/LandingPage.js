import React from 'react'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div>
      <Link href="/LoginPage">Login</Link>
      <Link href="/Register">Register</Link>
      <Link href="/Posts">Posts</Link>
    </div>
  )
}

export default LandingPage;