import Button from '@suid/material/Button';
import Checkbox from '@suid/material/Checkbox';
import Container from '@suid/material/Container';
import FormControlLabel from '@suid/material/FormControlLabel';
import TextField from '@suid/material/TextField';
import { Component, createSignal } from 'solid-js';
import SolidSVG from '../../../assets/solid.svg';
import Link from '../../../components/Link';

export const SignInPage: Component = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');

  const signIn = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container>
      <main class="w-full h-screen flex items-center justify-center">
        <div class="border shadow-2xl px-8 py-16 rounded max-w-lg w-full">
          <form onSubmit={signIn}>
            <div class="flex flex-col gap-8">
              <div class="w-32 mx-auto">
                <Link href="/">
                  <SolidSVG />
                </Link>
              </div>
              <div class="flex flex-col gap-2 text-center">
                <h1 class="uppercase text-4xl font-bold">Welcome</h1>
                <p class="text-gray-500">Log in to Solid to continue</p>
              </div>
              <div class="flex flex-col gap-4">
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="Username"
                  value={username()}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  value={password()}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex justify-between items-center">
                  <FormControlLabel control={<Checkbox />} label="Remember" />
                  <Link href="/password/forget">
                    <p class="text-blue-500">
                      Forget <span class="hidden md:inline">Your Password</span>
                      ?
                    </p>
                  </Link>
                </div>
                <Button type="submit" variant="contained">
                  Sign In
                </Button>
                <Link
                  href="/auth/sign-up"
                  className="text-blue-500 text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default SignInPage;
