import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { UserSession } from '@/auth/UserSession'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        let userSession: UserSession
        try {
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
          }
          const result = await fetch(`${process.env.BASE_URL}/api/auth`, options)
          userSession = await result.json()
        } catch (e) {
          return null
        }

        const user: UserSession = {
          id: userSession.id,
          name: userSession.name,
          email: userSession.email,
        }
        return user
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user, account }) => {
      if (user) {
        token.user = user
        token.id = user.id
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    session: ({ session, token }) => {
      const tokenInUser: UserSession = token.user as UserSession
      return {
        ...session,
        user: {
          ...tokenInUser,
          ...session.user,
        },
      }
    },
  },
}

export default authOptions
