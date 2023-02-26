import { A } from '@solidjs/router';
import Button from '@suid/material/Button';
import Container from '@suid/material/Container';
import TextField from '@suid/material/TextField';
import { Component, createSignal } from 'solid-js';
import SolidSVG from '../../../assets/solid.svg';

export const ResetPasswordPage: Component = () => {
  const [newPassword, setNewPassword] = createSignal('');
  const [confirmedPassword, setConfirmedPassword] = createSignal('');

  const reset = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container>
      <main class="w-full h-screen flex items-center justify-center">
        <div class="border shadow-2xl px-8 py-16 rounded max-w-lg w-full">
          <form onSubmit={reset}>
            <div class="flex flex-col gap-8">
              <div class="w-32 mx-auto">
                <A href="/">
                  <SolidSVG />
                </A>
              </div>
              <div class="flex flex-col gap-2 text-center">
                <h1 class="uppercase text-4xl font-bold">Reset</h1>
                <p class="text-gray-500">Enter new password to reset</p>
              </div>
              <div class="flex flex-col gap-4">
                <TextField
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  placeholder="New Password"
                  value={newPassword()}
                  onChange={(event) => setNewPassword(event.target.value)}
                  required
                />
                <TextField
                  id="confirmedPassword"
                  name="confirmedPassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={confirmedPassword()}
                  onChange={(event) => setConfirmedPassword(event.target.value)}
                  required
                />
              </div>
              <div class="flex flex-col gap-4">
                <Button type="submit" variant="contained">
                  Reset Password
                </Button>
                <A href="/auth/sign-in" class="text-blue-500 text-center">
                  Back to Sign In
                </A>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default ResetPasswordPage;
