import CircularProgress from '@suid/material/CircularProgress';
import Container from '@suid/material/Container';
import FormControl from '@suid/material/FormControl';
import InputLabel from '@suid/material/InputLabel';
import MenuItem from '@suid/material/MenuItem';
import Paper from '@suid/material/Paper';
import Select, { SelectChangeEvent } from '@suid/material/Select';
import { SolidApexCharts } from 'solid-apexcharts';
import { Component, createResource, createSignal } from 'solid-js';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';

type HistoryData = { price: string; timestamp: number };

type HistoryResponse = {
  status: string;
  data: {
    change: string;
    history: HistoryData[];
  };
};

type TimePeriod =
  | '1h'
  | '3h'
  | '12h'
  | '24h'
  | '7d'
  | '30d'
  | '3m'
  | '1y'
  | '3y'
  | '5y';

const fetchHistory = async (uuid: string): Promise<HistoryResponse> => {
  console.log(uuid);
  if (!uuid) {
    return { status: '', data: { change: '', history: [] } };
  }
  const url = `https://api.coinranking.com/v2/coin/${uuid}/history?timePeriod=5y`;
  return new Promise<HistoryResponse>((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

type Coin = {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
};

type CoinsResponse = {
  status: string;
  data: {
    stats: {
      total: number;
      totalCoins: number;
      totalMarkets: number;
      totalExchanges: number;
      totalMarketCap: string;
      total24hVolume: string;
    };
    coins: Coin[];
  };
};

const fetchCoins = async (): Promise<CoinsResponse> => {
  const url = `https://api.coinranking.com/v2/coins`;
  return new Promise<CoinsResponse>((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const ChartPage: Component = () => {
  const [coinUuid, setCoinUuid] = createSignal<string>('');
  const [coinsResponse] = createResource<CoinsResponse>(fetchCoins);
  const [historyResponse] = createResource<HistoryResponse, string>(
    coinUuid,
    fetchHistory
  );

  return (
    <main class="min-h-screen flex flex-col">
      <Navbar />
      <div class="grow">
        <Container class="py-8">
          <Paper>
            <div class="flex flex-col gap-8 p-8">
              <FormControl fullWidth>
                <InputLabel id="coin-select-label">Coin</InputLabel>
                <Select
                  id="coin-select"
                  labelId="coin-select-label"
                  value={coinUuid()}
                  label="Coin"
                  onChange={(event: SelectChangeEvent) => {
                    console.log(event.target.value);
                    setCoinUuid(event.target.value);
                  }}
                >
                  {(coinsResponse()?.data.coins.splice(0, 10) || []).map(
                    (coin: Coin) => {
                      return <MenuItem value={coin.uuid}>{coin.name}</MenuItem>;
                    }
                  )}
                </Select>
              </FormControl>
              {historyResponse.loading ? (
                <div class="flex items-center justify-center">
                  <div class="w-16 mx-auto">
                    <CircularProgress size={'4rem'} class="mx-auto block" />
                  </div>
                </div>
              ) : (
                <>
                  {historyResponse() ? (
                    <SolidApexCharts
                      type="line"
                      options={{
                        chart: { animations: { enabled: false } },
                        noData: {
                          text: '',
                          align: 'center',
                          verticalAlign: 'middle',
                        },
                        title: {
                          text: 'Price by Day',
                          align: 'left',
                        },
                        xaxis: {
                          categories: (
                            historyResponse()
                              ?.data.history.splice(0, 30)
                              .reverse() || []
                          ).map(({ timestamp }: HistoryData) => {
                            return new Date(timestamp * 1000)
                              .toISOString()
                              .split('T')[0];
                          }),
                        },
                      }}
                      series={[
                        {
                          name: 'Price',
                          data: (
                            historyResponse()
                              ?.data.history.splice(0, 30)
                              .reverse() || []
                          ).map(({ price }: HistoryData) => {
                            return parseFloat(parseFloat(price).toFixed(2));
                          }),
                        },
                      ]}
                    />
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          </Paper>
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default ChartPage;
