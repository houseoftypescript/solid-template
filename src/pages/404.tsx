import Button from '@suid/material/Button';
import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

const NotFoundPage: Component = () => {
  return (
    <main class="w-full h-screen flex justify-center items-center">
      <div class="flex flex-col gap-4 text-center uppercase">
        <h1 class="text-9xl font-bold">404</h1>
        <p class="text-3xl">Page Not Found</p>
        <A href="/">
          <Button variant="contained" fullWidth>
            Back to Home
          </Button>
        </A>
      </div>
    </main>
  );
};

export default NotFoundPage;
