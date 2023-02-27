import CircularProgress from '@suid/material/CircularProgress';
import Container from '@suid/material/Container';
import Paper from '@suid/material/Paper';
import Table from '@suid/material/Table';
import TableBody from '@suid/material/TableBody';
import TableCell from '@suid/material/TableCell';
import TableContainer from '@suid/material/TableContainer';
import TableHead from '@suid/material/TableHead';
import TableRow from '@suid/material/TableRow';
import { Component, For, createResource } from 'solid-js';
import Footer from '../../../components/organisms/Footer';
import Navbar from '../../../components/organisms/Navbar';

export type Country = {
  name: {
    common: string;
    official: string;
  };
  flag: string;
  cca2: string;
  cca3: string;
  region: string;
  subregion: string;
};

const delay = (milliseconds: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
};

const fetchCountries = async (url: string): Promise<Country[]> => {
  return new Promise<Country[]>((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const TablePage: Component = () => {
  const url = 'https://restcountries.com/v3.1/all';
  const [countries] = createResource<Country[], string>(url, fetchCountries);

  return (
    <main class="min-h-screen flex flex-col">
      <Navbar />
      <div class="grow">
        {countries.loading ? (
          <Container class="py-8">
            <div class="h-full flex items-center justify-center">
              <div class="w-16 mx-auto">
                <CircularProgress size={'4rem'} class="mx-auto block" />
              </div>
            </div>
          </Container>
        ) : (
          <></>
        )}
        {countries() ? (
          <section class="py-8">
            <Container>
              <Paper class="border">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">ISO 3166-1</TableCell>
                        <TableCell align="right">Region</TableCell>
                        <TableCell align="right">Subregion</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <For
                        each={countries()?.sort((a, b) => {
                          if (a.region === b.region) {
                            if (a.subregion === b.subregion) {
                              return a.name.common > b.name.common ? 1 : -1;
                            }
                            return a.subregion > b.subregion ? 1 : -1;
                          }
                          return a.region > b.region ? 1 : -1;
                        })}
                      >
                        {(country: Country) => {
                          return (
                            <TableRow>
                              <TableCell>
                                {country.flag} {country.name.common}
                              </TableCell>
                              <TableCell align="center">
                                {country.cca2} - {country.cca3}
                              </TableCell>
                              <TableCell align="right">
                                {country.region}
                              </TableCell>
                              <TableCell align="right">
                                {country.subregion}
                              </TableCell>
                            </TableRow>
                          );
                        }}
                      </For>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Container>
          </section>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default TablePage;
