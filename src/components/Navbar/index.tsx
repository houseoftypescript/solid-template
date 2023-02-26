import Button from '@suid/material/Button';
import Container from '@suid/material/Container';
import { Component } from 'solid-js';
import Link from '../Link';

export const Navbar: Component = () => {
  return (
    <nav>
      <div class="py-8 border-b">
        <Container>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-4 uppercase">
              <h1 class="text-3xl">
                <Link href="/apps">Solid</Link>
              </h1>
              <Link href="/apps/chart">Chart</Link>
              <Link href="/apps/table">Table</Link>
            </div>
            <Link href="/">
              <Button variant="contained">Sign Out</Button>
            </Link>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
