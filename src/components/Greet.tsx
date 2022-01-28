type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : "Welcome guest"}
      </h2>
    </div>
  );
}

export default Greet;
