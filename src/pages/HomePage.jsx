import { GoogleButton } from '../components/Buttons/GoogleButton';
import { LogInButton } from '../components/Buttons/LogInButton';
import { RegistrationButton } from '../components/Buttons/RegistrationButton';
import { InputButton } from '../components/Buttons/InputButton';
import { ClearButton } from '../components/Buttons/ClearButton';

function HomePage() {
  return (
    <>
      <div style={{ color: 'white' }}>HOME PAGE</div>
      <GoogleButton />
      <LogInButton />
      <RegistrationButton />
      <InputButton />
      <ClearButton />
    </>
  );
}

export default HomePage;
