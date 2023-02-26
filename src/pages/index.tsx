import { A } from '@solidjs/router';
import Button from '@suid/material/Button';
import type { Component } from 'solid-js';

export const IndexPage: Component = () => {
  return (
    <main class="w-full h-screen flex items-center justify-center">
      <div class="flex flex-col gap-4 text-center uppercase">
        <h1 class="text-9xl font-bold">Solid.js</h1>
        <p class="text-3xl">TypeScript + Tailwind CSS + Material UI</p>
        <A href="/auth/sign-in">
          <Button variant="contained" fullWidth>
            Sign In
          </Button>
        </A>
      </div>
    </main>
  );
};

export default IndexPage;
