"use client"

import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react"
import { SignInButton, UserButton } from "@clerk/nextjs";

import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)

  return (
    <>
      <Authenticated>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <p>apps/Web</p>
          <UserButton />
          <Button onClick={() => addUser()}>Add User</Button>
          <div className="mx-auto w-full max-w-sm">
            {JSON.stringify(users, null, 2)}
          </div>
        </div>
      </Authenticated>

      <Unauthenticated>
        <p>Please sign in to view users.</p>
        <SignInButton>sign in</SignInButton>
      </Unauthenticated>
    </>
  )
}
