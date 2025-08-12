import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Anything",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter your unsername" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                const username = credentials?.username
                const password = credentials?.password

                const user = {
                    name:"Nitin",
                    id:"1",
                    username:"areyyynitin "
                }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
})

export { handler as GET, handler as POST }