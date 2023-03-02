import Container from '@suid/material/Container';
import { Component } from 'solid-js';
import Link from '../../atoms/Link';
import UserMenu from '../../molecules/UserMenu';

export const Navbar: Component = () => {
  return (
    <nav>
      <div class="py-8 border-b">
        <Container>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-4 uppercase">
              <h1 class="text-2xl">
                <Link href="/apps">Solid</Link>
              </h1>
              <Link href="/apps/chart">Chart</Link>
              <Link href="/apps/table">Table</Link>
              <Link href="/apps/calendar">Calendar</Link>
            </div>
            <div>
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
