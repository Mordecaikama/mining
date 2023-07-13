import React, { useState } from 'react'

function Index() {
  const [state, setstate] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    menu: false,
  })

  return (
    <div className='main__container'>
      <aside class={`${state.menu && 'menushow'}`}>
        <div className='top'>
          <span className='material-icons-sharp logo'>public</span>
          <h3>Mine</h3>
          <span
            className='material-icons-sharp close'
            onClick={() => setstate({ ...state, menu: !state.menu })}
          >
            close
          </span>
        </div>

        <div className='sidebar'>
          <a href='#'>
            <span className='material-icons-sharp'>home</span>
            <h3>Dashboard</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>account_balance_wallet</span>
            <h3>Wallet</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>stacked_line_chart</span>
            <h3>Statistics</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>domain</span>
            <h3>Transactions</h3>
          </a>
          <a href='#'>
            <span className='material-icons-sharp'>currency_exchange</span>
            <h3>Exchange</h3>
          </a>
          <a href='#' className='active'>
            <span className='material-icons-sharp'>newspaper</span>
            <h3>News</h3>
          </a>

          <div className='bottom'>
            <div className='devices'>
              <div className='device'>
                <span className='material-icons-sharp icon'>aod</span>
                <div className='info'>
                  <span className='text'>Mordee</span>
                  <div className='status'>
                    <div className='active'></div>
                    <span>Active</span>
                  </div>
                </div>

                <span className='material-icons-sharp vert'>more_vert</span>
              </div>
              <div className='device'>
                <span className='material-icons-sharp icon'>devices</span>
                <div className='info'>
                  <span className='text'>Macintosh 2017</span>
                  <div className='status'>
                    <div className='active'></div>
                    <span>Active</span>
                  </div>
                </div>

                <span className='material-icons-sharp vert'>more_vert</span>
              </div>
              <div className='device'>
                <div className='profile-photo'>
                  <img src={require('../assets/profile-1.jpg')} alt='' />
                </div>
                <div className='info'>
                  <span className='text'>Macintosh 2017</span>
                  <div className='status'>
                    <div className='active'></div>
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main>
        <header>
          <div className='left'>
            <h2>Welcome to the dashboard</h2>
            <div className='currency'>
              <div>
                <span className='material-icons-sharp icon'>
                  currency_bitcoin
                </span>
              </div>

              <div>
                <span className='material-icons-sharp icon'>attach_money</span>
              </div>
              <div>
                <span className='material-icons-sharp icon'>
                  currency_pound
                </span>
              </div>
              <div>
                <span className='material-icons-sharp icon'>euro_symbol</span>
              </div>
              <div>
                <span className='material-icons-sharp icon'>currency_yen</span>
              </div>
              <div>
                <span className='material-icons-sharp icon'>currency_lira</span>
              </div>
              <div>
                <span className='material-icons-sharp icon'>
                  currency_ruble
                </span>
              </div>
              <div>
                <span className='material-icons-sharp icon'>
                  currency_franc
                </span>
              </div>
            </div>
          </div>
          <div className='right'>
            <h2>SEARCH</h2>
            <div className='search'>
              <input type='search' placeholder='Enter search term' />
              <span className='material-icons-sharp'>search</span>
            </div>
          </div>
          <span
            className='material-icons-sharp menu__icon'
            onClick={() => setstate({ ...state, menu: !state.menu })}
          >
            menu
          </span>
        </header>

        <div className='overview'>
          <h4>Overview</h4>
          <div className='overview__details'>
            <div className='overview__left'>
              <div className='left'>
                <div className='top'>
                  <div className='main'>
                    <span>Available balance in USD</span>
                    <h4 className='price'>134,510.15</h4>

                    <div className='middle'>
                      <div className='left'>
                        <span>Transactions</span>
                        <h4 className='price34,405'>34,405</h4>
                      </div>
                      <div className='right'>
                        <span>Wallets</span>
                        <h4>23 </h4>
                      </div>
                    </div>

                    <span>Last Activity at 21 May, 2019</span>
                  </div>

                  <div className='right__icon'>
                    <span className='material-icons-sharp'>
                      currency_bitcoin
                    </span>
                    <img src={require('../assets/tplt.png')} alt='' />
                    <img src={require('../assets/tprt.png')} alt='' />
                    <img src={require('../assets/btlt.png')} alt='' />
                    <img src={require('../assets/btrt.png')} alt='' />
                  </div>
                </div>
                <div className='bottom'>
                  <div className='coin'>
                    <span className='name'>Ethereum</span>
                    <span className='value'>4.434953</span>
                    <span className='material-icons-sharp'>north_west</span>
                  </div>
                  <div className='coin'>
                    <span className='name'>Ethereum</span>
                    <span className='value'>4.434953</span>
                    <span className='material-icons-sharp'>north_west</span>
                  </div>
                </div>
              </div>
              <div className='cards'>
                <div className='card no__marg'>
                  <h4>BTC/USD</h4>
                  <div className='price'>
                    <span className='material-icons-sharp'>attach_money</span>
                    <span className='text'>18928.15</span>
                    <span className='material-icons-sharp'>north_west</span>
                  </div>
                </div>
                <div className='card'>
                  <h4>BTC/USD</h4>
                  <div className='price'>
                    <span className='material-icons-sharp'>attach_money</span>
                    <span className='text'>18928.15</span>
                    <span className='material-icons-sharp'>north_west</span>
                  </div>
                </div>
                <div className='card'>
                  <h4>BTC/USD</h4>
                  <div className='price'>
                    <span className='material-icons-sharp'>attach_money</span>
                    <span className='text'>18928.15</span>
                    <span className='material-icons-sharp'>north_west</span>
                  </div>
                </div>
                <div className='card'>
                  <h4>BTC/USD</h4>
                  <div className='price'>
                    <span className='material-icons-sharp'>attach_money</span>
                    <span className='text'>18928.15</span>
                    <span className='material-icons-sharp'>north_west</span>
                  </div>
                </div>
                <div className='card'>
                  <h4>BTC/USD</h4>
                  <div className='price'>
                    <span className='material-icons-sharp'>attach_money</span>
                    <span className='text'>18928.15</span>
                    <span className='material-icons-sharp'>north_west</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='overview__right'>
              <div className='tel__details'>
                <span className='material-icons-sharp icon'>cruelty_free</span>
                <div className='text'>
                  <h5>Food Pandas</h5>
                  <span>Meal</span>
                </div>
                <div className='right'>
                  <span className='num'>-$15.85</span>
                  <span className='time'>10:05 PM</span>
                </div>
              </div>

              <div className='tel__details'>
                <span className='material-icons-sharp icon'>sports_rugby</span>
                <div className='text'>
                  <h5>Food Pandas</h5>
                  <span>Meal</span>
                </div>
                <div className='right'>
                  <span className='num'>-$15.85</span>
                  <span className='time'>10:05 PM</span>
                </div>
              </div>
              <div className='tel__details'>
                <span className='material-icons-sharp icon'>
                  account_balance
                </span>
                <div className='text'>
                  <h5>Food Pandas</h5>
                  <span>Meal</span>
                </div>
                <div className='right'>
                  <span className='num'>-$15.85</span>
                  <span className='time'>10:05 PM</span>
                </div>
              </div>
              <div className='tel__details'>
                <span className='material-icons-sharp icon'>wifi_channel</span>
                <div className='text'>
                  <h5>Food Pandas</h5>
                  <span>Meal</span>
                </div>
                <div className='right'>
                  <span className='num'>-$15.85</span>
                  <span className='time'>10:05 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className='security'>
            <h2>SECURITY</h2>
            <div className='main'>
              <article>
                <div className='left'>
                  <h5>Identity</h5>
                  span
                </div>
                <div className='right'>
                  <label class='switch'>
                    <input
                      type='checkbox'
                      checked={state.one}
                      onChange={() => setstate(!state.one)}
                    />
                    <span class='slider round'></span>
                  </label>
                </div>
              </article>
              <article>
                <div className='left'>
                  <h5>Identity</h5>
                  span
                </div>
                <div className='right'>
                  <label class='switch'>
                    <input
                      type='checkbox'
                      checked={state.two}
                      onChange={() => setstate(!state.two)}
                    />
                    <span class='slider round'></span>
                  </label>
                </div>
              </article>
              <article>
                <div className='left'>
                  <h5>Identity</h5>
                  span
                </div>
                <div className='right'>
                  <label class='switch'>
                    <input
                      type='checkbox'
                      checked={state.three}
                      onChange={() => setstate(!state.three)}
                    />
                    <span class='slider round'></span>
                  </label>
                </div>
              </article>
              <article>
                <div className='left'>
                  <h5>Identity</h5>
                  span
                </div>
                <div className='right'>
                  <label class='switch'>
                    <input
                      type='checkbox'
                      checked={state.four}
                      onChange={() => setstate(!state.four)}
                    />
                    <span class='slider round'></span>
                  </label>
                </div>
              </article>
            </div>
          </div>
          <div className='mining__status'>
            <h2>MINING STATUS</h2>

            <div className='main'>
              <article>
                <span className='material-icons-sharp icon'>
                  currency_bitcoin
                </span>
                <div className='info'>
                  <p>CPUS mining</p>
                  <span>running</span>
                </div>
                <div className='right'>
                  <label class='switch'>
                    <input
                      type='checkbox'
                      checked={state.one}
                      onChange={() => setstate(!state.one)}
                    />
                    <span class='slider round'></span>
                  </label>
                </div>
              </article>
              <article>
                <span className='material-icons-sharp icon'>
                  currency_bitcoin
                </span>
                <div className='info'>
                  <p>CPUS mining</p>
                  <span>running</span>
                </div>
                <div className='right'>
                  <label class='switch'>
                    <input
                      type='checkbox'
                      checked={state.one}
                      onChange={() => setstate(!state.one)}
                    />
                    <span class='slider round'></span>
                  </label>
                </div>
              </article>
              <article>
                <span className='material-icons-sharp icon'>
                  currency_bitcoin
                </span>
                <div className='info'>
                  <p>CPUS mining</p>
                  <span>running</span>
                </div>
                <div className='right'>
                  <label class='switch'>
                    <input
                      type='checkbox'
                      checked={state.one}
                      onChange={() => setstate(!state.one)}
                    />
                    <span class='slider round'></span>
                  </label>
                </div>
              </article>
              <article>
                <span className='material-icons-sharp icon'>
                  currency_bitcoin
                </span>
                <div className='info'>
                  <p>CPUS mining</p>
                  <span>running</span>
                </div>
                <div className='right'>
                  <label class='switch'>
                    <input
                      type='checkbox'
                      checked={state.one}
                      onChange={() => setstate(!state.one)}
                    />
                    <span class='slider round'></span>
                  </label>
                </div>
              </article>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Index
