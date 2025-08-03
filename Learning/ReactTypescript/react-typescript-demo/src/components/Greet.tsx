type GreetProps = {
  name: string
  messagesCount?: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  const { name, isLoggedIn, messagesCount = 0 } = props

  return (
    <div>
      <h2>
        {
          isLoggedIn
            ? `Welcome ${name}! You have ${messagesCount} unread messages`
            : 'Please login'
        }
      </h2>
    </div>
  )
}
