//import { Provider, createStoreHook } from 'react-redux'
import { FormCo } from './components/form.tsx';
//import { dashboardReducer } from "./store/dashboardReducer.tsx";
import './assets/styling/App.scss';
import { Chart } from './components/chart.tsx';

export const App = (_props: any) => {

  //const dashboardData = createStoreHook(dashboardReducer);


  return <div className="App">
    <nav>
      <span className="lb20px">VICT.</span>
      <div className="wrap">
        <h4 className="lm18px">Built using ReactJs,<br /> Redux and Scss</h4>
        <h4 className="lm18px">Baisc interest <br />
          calculator web app</h4>
      </div>
    </nav>

    <section>
      <label htmlFor="Plan Form">
        <h2 className="lb24px">Plan Form</h2>
      </label>
      <div className="wraper">
        <FormCo />
      </div>
    </section>

      <section>
        <label htmlFor="Plan Form">
          <h2 className="lb24px">Interest Monitor</h2>
        </label>
        <div className="wraper">
          <Chart data={[{"Test":75}]}/>
        </div>
      </section>

  </div>
}
