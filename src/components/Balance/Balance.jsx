import { Button, Container, Input, Text } from "./Balance.styled";

export const Balance = () => {
    return (
        <div>
          <Text>Balance</Text>
          <Container>
          <Input type="text" placeholder="00.00 UAH" />
          <Button type='submit'>CONFIRM</Button>
          </Container>
        </div>
    );
  };